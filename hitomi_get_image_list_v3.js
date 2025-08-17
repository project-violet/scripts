// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 280:
case 1029:
case 692:
case 2474:
case 2102:
case 2500:
case 3801:
case 2419:
case 957:
case 799:
case 730:
case 1780:
case 2631:
case 3391:
case 1124:
case 3041:
case 1020:
case 789:
case 325:
case 2905:
case 705:
case 3686:
case 682:
case 1031:
case 204:
case 2410:
case 1468:
case 3456:
case 3603:
case 1165:
case 3213:
case 2863:
case 1494:
case 1862:
case 4056:
case 4070:
case 3980:
case 2141:
case 1293:
case 358:
case 2826:
case 882:
case 3880:
case 503:
case 113:
case 1288:
case 1962:
case 314:
case 2292:
case 2581:
case 1135:
case 3989:
case 4079:
case 3414:
case 1987:
case 1113:
case 731:
case 1775:
case 1458:
case 1568:
case 18:
case 281:
case 1477:
case 3188:
case 3286:
case 323:
case 2673:
case 2072:
case 2400:
case 1245:
case 2220:
case 291:
case 1672:
case 2915:
case 3548:
case 3235:
case 3911:
case 2127:
case 947:
case 3787:
case 2971:
case 4023:
case 530:
case 2953:
case 3975:
case 4085:
case 3436:
case 348:
case 397:
case 408:
case 4036:
case 3514:
case 3485:
case 2795:
case 2481:
case 3613:
case 2728:
case 387:
case 2093:
case 2088:
case 1852:
case 3570:
case 770:
case 3172:
case 4066:
case 2871:
case 3027:
case 1693:
case 1155:
case 1594:
case 589:
case 4004:
case 1909:
case 2958:
case 3060:
case 3797:
case 971:
case 598:
case 4028:
case 485:
case 3039:
case 3428:
case 150:
case 3781:
case 409:
case 2491:
case 2785:
case 3106:
case 3208:
case 1800:
case 2083:
case 2348:
case 141:
case 2682:
case 162:
case 1900:
case 1390:
case 2025:
case 1717:
case 635:
case 2098:
case 1683:
case 3134:
case 684:
case 3030:
case 588:
case 1625:
case 3922:
case 1606:
case 2064:
case 2562:
case 2160:
case 1471:
case 1216:
case 2452:
case 673:
case 467:
case 1664:
case 1981:
case 2379:
case 0:
case 3817:
case 894:
case 2946:
case 999:
case 3198:
case 3296:
case 930:
case 3700:
case 2678:
case 1057:
case 1634:
case 676:
case 2130:
case 1254:
case 3822:
case 1526:
case 41:
case 1078:
case 2034:
case 3543:
case 2356:
case 3116:
case 3218:
case 1810:
case 25:
case 2938:
case 3608:
case 2770:
case 1515:
case 1919:
case 601:
case 3300:
case 636:
case 3059:
case 1405:
case 2240:
case 633:
case 359:
case 1283:
case 2779:
case 1225:
case 617:
case 1819:
case 2147:
case 2591:
case 3309:
case 122:
case 2714:
case 3154:
case 3595:
case 140:
case 486:
case 3807:
case 801:
case 2667:
case 2366:
case 836:
case 3443:
case 2159:
case 1108:
case 1790:
case 1616:
case 798:
case 2994:
case 3381:
case 1654:
case 2323:
case 1571:
case 2385:
case 474:
case 788:
case 1553:
case 2257:
case 2054:
case 3696:
case 1463:
case 3397:
case 2637:
case 906:
case 1234:
case 2176:
case 817:
case 931:
case 2150:
case 3534:
case 2824:
case 2903:
case 3633:
case 227:
case 1761:
case 2275:
case 3253:
case 688:
case 1544:
case 500:
case 3454:
case 1731:
case 594:
case 2447:
case 3663:
case 3312:
case 647:
case 1720:
case 2924:
case 3062:
case 1496:
case 2803:
case 4054:
case 296:
case 1126:
case 2132:
case 1841:
case 3143:
case 352:
case 2459:
case 1408:
case 888:
case 2372:
case 2569:
case 1133:
case 733:
case 717:
case 129:
case 1373:
case 2965:
case 3583:
case 847:
case 2450:
case 2211:
case 2935:
case 1163:
case 3215:
case 3931:
case 2865:
case 2539:
case 701:
case 573:
case 3920:
case 1518:
case 2560:
case 2162:
case 360:
case 76:
case 2675:
case 533:
case 1912:
case 3653:
case 3406:
case 1243:
case 2547:
case 3671:
case 107:
case 3554:
case 3195:
case 517:
case 319:
case 1827:
case 267:
case 1596:
case 3892:
case 1751:
case 2813:
case 3263:
case 3434:
case 3302:
case 3516:
case 501:
case 21:
case 536:
case 3341:
case 3712:
case 2028:
case 2095:
case 2345:
case 857:
case 1418:
case 2460:
case 234:
case 1695:
case 3851:
case 3087:
case 209:
case 342:
case 3951:
case 1508:
case 1361:
case 4025:
case 1329:
case 320:
case 1792:
case 44:
case 72:
case 4083:
case 3727:
case 2421:
case 3205:
case 30:
case 2611:
case 3483:
case 3498:
case 3425:
case 2469:
case 575:
case 3615:
case 1177:
case 3081:
case 168:
case 2412:
case 2844:
case 3347:
case 1685:
case 936:
case 1524:
case 1158:
case 1256:
case 2109:
case 3878:
case 582:
case 2036:
case 3760:
case 592:
case 2427:
case 3978:
case 1604:
case 2066:
case 806:
case 2617:
case 2207:
case 272:
case 1782:
case 3957:
case 3493:
case 1017:
case 1279:
case 2100:
case 2502:
case 1740:
case 2181:
case 1869:
case 1939:
case 870:
case 3658:
case 603:
case 1248:
case 318:
case 3949:
case 1830:
case 3677:
case 2764:
case 3882:
case 3009:
case 1586:
case 2918:
case 3376:
case 3545:
case 1960:
case 3350:
case 1778:
case 491:
case 2734:
case 2818:
case 3268:
case 4072:
case 3982:
case 631:
case 1969:
case 3104:
case 3940:
case 1921:
case 1403:
case 3148:
case 1357:
case 1285:
case 1670:
case 1656:
case 1223:
case 3837:
case 889:
case 900:
case 2402:
case 805:
case 1847:
case 2334:
case 2070:
case 3588:
case 2056:
case 2174:
case 2222:
case 128:
case 1168:
case 1266:
case 2110:
case 935:
case 1947:
case 2364:
case 3750:
case 1679:
case 2014:
case 1513:
case 984:
case 1424:
case 2607:
case 782:
case 3019:
case 1767:
case 2908:
case 3638:
case 605:
case 2048:
case 480:
case 3321:
case 1194:
case 2716:
case 871:
case 3330:
case 155:
case 1648:
case 3170:
case 689:
case 976:
case 3114:
case 1349:
case 630:
case 2754:
case 1950:
case 2808:
case 143:
case 1486:
case 1859:
case 3445:
case 792:
case 2699:
case 3339:
case 2441:
case 2720:
case 560:
case 2496:
case 1924:
case 1803:
case 3786:
case 373:
case 1689:
case 3063:
case 3313:
case 3662:
case 3735:
case 2802:
case 2089:
case 2731:
case 4067:
case 2643:
case 2392:
case 3632:
case 2544:
case 1824:
case 1043:
case 1388:
case 3578:
case 2080:
case 1642:
case 2184:
case 3026:
case 944:
case 1393:
case 719:
case 1903:
case 2941:
case 440:
case 3724:
case 742:
case 422:
case 2518:
case 761:
case 1986:
case 1211:
case 394:
case 1935:
case 2163:
case 70:
case 1539:
case 1865:
case 300:
case 1569:
case 2351:
case 1835:
case 3540:
case 3355:
case 2373:
case 812:
case 1132:
case 2295:
case 2228:
case 2126:
case 2841:
case 3291:
case 1886:
case 1459:
case 183:
case 3703:
case 1372:
case 3845:
case 375:
case 2812:
case 3303:
case 211:
case 1813:
case 4057:
case 2751:
case 954:
case 3567:
case 520:
case 3111:
case 542:
case 1242:
case 1913:
case 3071:
case 2912:
case 3324:
case 1547:
case 1191:
case 3888:
case 3232:
case 336:
case 1611:
case 301:
case 1201:
case 3972:
case 1559:
case 2361:
case 2508:
case 2011:
case 760:
case 36:
case 721:
case 2329:
case 3015:
case 1430:
case 462:
case 3335:
case 3713:
case 2628:
case 3449:
case 2153:
case 450:
case 2331:
case 1855:
case 4049:
case 1028:
case 185:
case 1439:
case 3872:
case 1550:
case 1345:
case 1152:
case 3386:
case 2367:
case 1725:
case 866:
case 1798:
case 2666:
case 1100:
case 1783:
case 1944:
case 3806:
case 1502:
case 1316:
case 83:
case 1617:
case 1066:
case 3492:
case 1207:
case 415:
case 2782:
case 1109:
case 2256:
case 2270:
case 2524:
case 2685:
case 825:
case 2749:
case 90:
case 1036:
case 1354:
case 2413:
case 518:
case 942:
case 961:
case 2636:
case 658:
case 3396:
case 920:
case 1622:
case 863:
case 554:
case 2337:
case 1844:
case 3697:
case 1412:
case 2757:
case 3308:
case 3998:
case 424:
case 4073:
case 2921:
case 2839:
case 2565:
case 2778:
case 2930:
case 1734:
case 3473:
case 666:
case 392:
case 48:
case 3122:
case 2830:
case 477:
case 253:
case 382:
case 3058:
case 1764:
case 858:
case 2960:
case 625:
case 2869:
case 1290:
case 2821:
case 3077:
case 814:
case 2248:
case 2146:
case 2204:
case 2513:
case 697:
case 2614:
case 826:
case 3199:
case 2266:
case 3954:
case 952:
case 1364:
case 2007:
case 1014:
case 2679:
case 3916:
case 1056:
case 1334:
case 1174:
case 3297:
case 228:
case 3854:
case 2403:
case 2656:
case 3094:
case 865:
case 2285:
case 3344:
case 3190:
case 1896:
case 3592:
case 2486:
case 626:
case 848:
case 1441:
case 3420:
case 2737:
case 4031:
case 464:
case 3107:
case 2435:
case 3318:
case 2976:
case 2950:
case 87:
case 3619:
case 1716:
case 665:
case 2850:
case 2648:
case 754:
case 1398:
case 2959:
case 4029:
case 1383:
case 718:
case 623:
case 3573:
case 2194:
case 2555:
case 2645:
case 2789:
case 1273:
case 3763:
case 723:
case 1620:
case 3641:
case 2468:
case 1251:
case 3499:
case 1045:
case 2558:
case 3086:
case 264:
case 2020:
case 1884:
case 1328:
case 3726:
case 1629:
case 1419:
case 3490:
case 1743:
case 1984:
case 2780:
case 3065:
case 446:
case 3315:
case 3733:
case 1474:
case 1102:
case 4090:
case 2061:
case 2311:
case 1833:
case 3227:
case 3371:
case 2135:
case 370:
case 1292:
case 1963:
case 3353:
case 563:
case 2375:
case 3131:
case 525:
case 1141:
case 2832:
case 1826:
case 2962:
case 3024:
case 3705:
case 2494:
case 3003:
case 3943:
case 959:
case 1933:
case 797:
case 3517:
case 1863:
case 3055:
case 389:
case 2073:
case 2887:
case 2672:
case 3192:
case 2051:
case 1127:
case 1519:
case 57:
case 2891:
case 2245:
case 1400:
case 1072:
case 3384:
case 587:
case 305:
case 456:
case 763:
case 29:
case 1574:
case 1220:
case 3241:
case 2301:
case 2568:
case 2991:
case 2477:
case 3995:
case 2987:
case 548:
case 399:
case 330:
case 2775:
case 3753:
case 1409:
case 2458:
case 3151:
case 1871:
case 2594:
case 4017:
case 2342:
case 215:
case 3326:
case 3627:
case 2852:
case 1088:
case 714:
case 1343:
case 526:
case 2952:
case 1795:
case 179:
case 3202:
case 2389:
case 1953:
case 3363:
case 3422:
case 3276:
case 1858:
case 102:
case 3621:
case 2415:
case 1766:
case 2625:
case 3669:
case 3157:
case 1348:
case 262:
case 652:
case 1877:
case 1682:
case 2040:
case 2390:
case 2900:
case 1704:
case 2717:
case 4011:
case 1025:
case 660:
case 3660:
case 1785:
case 1491:
case 2800:
case 2722:
case 1736:
case 3368:
case 2909:
case 987:
case 97:
case 1130:
case 411:
case 388:
case 852:
case 2078:
case 3966:
case 1356:
case 3182:
case 926:
case 1370:
case 3823:
case 1169:
case 1678:
case 3904:
case 3885:
case 3394:
case 2981:
case 1006:
case 2664:
case 3589:
case 1379:
case 4075:
case 1946:
case 2563:
case 1267:
case 347:
case 923:
case 3936:
case 407:
case 3758:
case 860:
case 549:
case 3149:
case 1314:
case 1562:
case 3866:
case 1160:
case 821:
case 3358:
case 222:
case 2910:
case 1591:
case 1714:
case 4001:
case 240:
case 1587:
case 2298:
case 3401:
case 3269:
case 819:
case 2225:
case 2819:
case 3137:
case 914:
case 3167:
case 749:
case 3239:
case 2484:
case 60:
case 3511:
case 2919:
case 3008:
case 3260:
case 958:
case 661:
case 1249:
case 642:
case 1756:
case 138:
case 2799:
case 2463:
case 357:
case 619:
case 3870:
case 1552:
case 1150:
case 2654:
case 4089:
case 2037:
case 712:
case 3346:
case 3480:
case 3879:
case 2206:
case 2108:
case 1159:
case 963:
case 2067:
case 2790:
case 2426:
case 1432:
case 3442:
case 3814:
case 2264:
case 1016:
case 2433:
case 4080:
case 925:
case 3956:
case 3738:
case 845:
case 2002:
case 2456:
case 2889:
case 2213:
case 1129:
case 3863:
case 1003:
case 1943:
case 1120:
case 668:
case 3826:
case 2479:
case 2880:
case 951:
case 1371:
case 3581:
case 3292:
case 2842:
case 2624:
case 1131:
case 78:
case 380:
case 1733:
case 266:
case 656:
case 777:
case 1726:
case 2732:
case 3629:
case 1490:
case 3419:
case 3805:
case 106:
case 4074:
case 516:
case 23:
case 4010:
case 513:
case 3045:
case 2391:
case 444:
case 1086:
case 724:
case 3395:
case 2762:
case 537:
case 3884:
case 225:
case 3905:
case 390:
case 339:
case 653:
case 2686:
case 263:
case 1763:
case 3620:
case 2579:
case 4081:
case 3971:
case 1202:
case 962:
case 2975:
case 1612:
case 3953:
case 3497:
case 843:
case 2436:
case 2514:
case 2203:
case 1507:
case 2012:
case 2613:
case 3795:
case 2404:
case 59:
case 1326:
case 287:
case 2224:
case 855:
case 2556:
case 3343:
case 2172:
case 846:
case 1715:
case 1173:
case 1771:
case 199:
case 130:
case 454:
case 3409:
case 3112:
case 1599:
case 418:
case 381:
case 1928:
case 646:
case 2655:
case 2188:
case 3673:
case 2286:
case 1895:
case 105:
case 391:
case 2193:
case 1241:
case 515:
case 3231:
case 189:
case 2548:
case 3915:
case 655:
case 265:
case 1590:
case 2922:
case 198:
case 1936:
case 3314:
case 4052:
case 1777:
case 1589:
case 3379:
case 419:
case 3946:
case 924:
case 3237:
case 2296:
case 3169:
case 1542:
case 2700:
case 2183:
case 3678:
case 1904:
case 1394:
case 3130:
case 977:
case 2644:
case 188:
case 1836:
case 3532:
case 98:
case 1966:
case 3370:
case 3034:
case 3958:
case 1501:
case 1018:
case 4091:
case 3487:
case 2428:
case 3977:
case 751:
case 2495:
case 2618:
case 1660:
case 1259:
case 1746:
case 420:
case 34:
case 740:
case 3682:
case 3877:
case 2021:
case 442:
case 1630:
case 461:
case 3098:
case 1411:
case 302:
case 2134:
case 3640:
case 1338:
case 3766:
case 1669:
case 1442:
case 4032:
case 3016:
case 2774:
case 1970:
case 1738:
case 1956:
case 3432:
case 3:
case 1096:
case 3462:
case 2381:
case 607:
case 3385:
case 3894:
case 1575:
case 3257:
case 2696:
case 2710:
case 3054:
case 869:
case 540:
case 2397:
case 2907:
case 1856:
case 1489:
case 1870:
case 3150:
case 2116:
case 937:
case 1260:
case 811:
case 3249:
case 750:
case 3770:
case 1948:
case 1239:
case 2300:
case 1511:
case 1008:
case 2059:
case 1794:
case 669:
case 3240:
case 1377:
case 1650:
case 3779:
case 1848:
case 2890:
case 1137:
case 3968:
case 1358:
case 2309:
case 3282:
case 916:
case 2999:
case 3838:
case 2154:
case 1230:
case 3132:
case 1084:
case 2820:
case 1291:
case 252:
case 2143:
case 3459:
case 3886:
case 1180:
case 1845:
case 641:
case 3372:
case 2961:
case 184:
case 4059:
case 3521:
case 2831:
case 1540:
case 1287:
case 3211:
case 194:
case 3450:
case 2605:
case 3601:
case 3865:
case 100:
case 1549:
case 2920:
case 12:
case 1005:
case 1724:
case 4076:
case 3986:
case 393:
case 650:
case 260:
case 1252:
case 3388:
case 3043:
case 3642:
case 1467:
case 2633:
case 3903:
case 707:
case 943:
case 3275:
case 529:
case 1765:
case 1632:
case 1313:
case 711:
case 3447:
case 946:
case 850:
case 2741:
case 4047:
case 1101:
case 955:
case 3803:
case 3745:
case 2564:
case 729:
case 449:
case 2712:
case 2341:
case 507:
case 3576:
case 4060:
case 2091:
case 3460:
case 1335:
case 1713:
case 1449:
case 4039:
case 3855:
case 1691:
case 2873:
case 309:
case 2951:
case 261:
case 651:
case 16:
case 1365:
case 220:
case 968:
case 3430:
case 3421:
case 1440:
case 3611:
case 2483:
case 101:
case 3201:
case 3469:
case 2498:
case 1972:
case 3793:
case 2653:
case 3675:
case 2052:
case 1324:
case 1893:
case 822:
case 1232:
case 2195:
case 2226:
case 1053:
case 2464:
case 219:
case 3913:
case 1537:
case 3813:
case 2263:
case 2302:
case 2992:
case 3289:
case 2516:
case 953:
case 3772:
case 1993:
case 31:
case 3181:
case 1825:
case 3290:
case 254:
case 2658:
case 1609:
case 2840:
case 3706:
case 2136:
case 2238:
case 1122:
case 813:
case 2949:
case 1520:
case 3197:
case 2009:
case 182:
case 3764:
case 911:
case 3918:
case 2376:
case 3734:
case 1473:
case 743:
case 1210:
case 816:
case 2268:
case 2166:
case 1451:
case 465:
case 2359:
case 1983:
case 3085:
case 448:
case 728:
case 3622:
case 1906:
case 2081:
case 1697:
case 3412:
case 3109:
case 1834:
case 864:
case 553:
case 2878:
case 2646:
case 3036:
case 308:
case 1964:
case 2760:
case 2097:
case 3316:
case 47:
case 3066:
case 969:
case 487:
case 372:
case 3725:
case 2769:
case 3004:
case 3798:
case 3783:
case 3100:
case 4027:
case 2721:
case 1674:
case 753:
case 3908:
case 3325:
case 2369:
case 3383:
case 2321:
case 2277:
case 1619:
case 3690:
case 2330:
case 624:
case 43:
case 2572:
case 2156:
case 2258:
case 1461:
case 815:
case 1431:
case 1107:
case 2114:
case 745:
case 2360:
case 2445:
case 1200:
case 3699:
case 1796:
case 756:
case 824:
case 546:
case 2246:
case 2148:
case 2759:
case 3119:
case 3896:
case 1281:
case 1916:
case 3334:
case 2694:
case 1297:
case 555:
case 3174:
case 2593:
case 1816:
case 3364:
case 2776:
case 458:
case 2750:
case 2867:
case 3306:
case 3996:
case 2937:
case 3079:
case 121:
case 2549:
case 1920:
case 2724:
case 3518:
case 294:
case 1861:
case 795:
case 1215:
case 574:
case 1931:
case 200:
case 1829:
case 678:
case 3351:
case 1525:
case 1961:
case 284:
case 602:
case 1929:
case 2540:
case 1831:
case 2287:
case 1583:
case 785:
case 235:
case 2084:
case 527:
case 709:
case 3408:
case 734:
case 1143:
case 152:
case 2582:
case 2703:
case 2845:
case 64:
case 1663:
case 593:
case 3720:
case 1741:
case 1312:
case 1062:
case 932:
case 1564:
case 457:
case 2063:
case 2735:
case 3731:
case 3802:
case 3643:
case 3042:
case 1253:
case 3902:
case 2632:
case 3392:
case 2765:
case 1327:
case 3544:
case 1416:
case 84:
case 767:
case 1534:
case 583:
case 2578:
case 3184:
case 802:
case 1205:
case 908:
case 26:
case 65:
case 793:
case 3329:
case 120:
case 3792:
case 1973:
case 786:
case 2015:
case 1727:
case 3418:
case 3171:
case 1851:
case 2335:
case 1873:
case 3331:
case 2691:
case 1341:
case 1712:
case 3320:
case 217:
case 1284:
case 2872:
case 2687:
case 369:
case 4018:
case 3444:
case 85:
case 3812:
case 2457:
case 2993:
case 3751:
case 2567:
case 1434:
case 3773:
case 2111:
case 2478:
case 3927:
case 2053:
case 727:
case 447:
case 1233:
case 1892:
case 534:
case 3912:
case 1653:
case 2888:
case 498:
case 2893:
case 1226:
case 1554:
case 3757:
case 1000:
case 2308:
case 2561:
case 3969:
case 4055:
case 967:
case 2744:
case 489:
case 1104:
case 345:
case 3839:
case 1940:
case 3565:
case 2117:
case 3778:
case 2600:
case 3455:
case 2473:
case 1166:
case 2210:
case 680:
case 1982:
case 2122:
case 1238:
case 1949:
case 2520:
case 1882:
case 690:
case 1677:
case 2058:
case 1009:
case 1376:
case 1350:
case 2825:
case 3535:
case 732:
case 1185:
case 2077:
case 3939:
case 1658:
case 2883:
case 499:
case 430:
case 1957:
case 3367:
case 3017:
case 3279:
case 3740:
case 2806:
case 2492:
case 2934:
case 3503:
case 2864:
case 3524:
case 3270:
case 995:
case 1347:
case 3256:
case 3749:
case 2964:
case 2681:
case 3413:
case 3623:
case 2718:
case 1097:
case 1760:
case 3177:
case 804:
case 1857:
case 2906:
case 1739:
case 3636:
case 368:
case 890:
case 2697:
case 3859:
case 681:
case 1445:
case 1668:
case 2420:
case 2431:
case 3349:
case 927:
case 1360:
case 3950:
case 2318:
case 1330:
case 1074:
case 431:
case 2429:
case 3876:
case 3648:
case 1572:
case 3850:
case 1170:
case 2461:
case 1156:
case 2209:
case 691:
case 3090:
case 3767:
case 1019:
case 2551:
case 1369:
case 346:
case 3194:
case 3555:
case 1277:
case 1321:
case 2573:
case 3204:
case 1867:
case 772:
case 1937:
case 3266:
case 3947:
case 2816:
case 679:
case 983:
case 3679:
case 1750:
case 1776:
case 2916:
case 3378:
case 891:
case 1694:
case 3847:
case 2297:
case 4003:
case 3236:
case 1148:
case 708:
case 3403:
case 1967:
case 1759:
case 2190:
case 2344:
case 2281:
case 2592:
case 1523:
case 608:
case 504:
case 270:
case 539:
case 2407:
case 3546:
case 2353:
case 1414:
case 1585:
case 2120:
case 337:
case 3293:
case 158:
case 1536:
case 2522:
case 1145:
case 2705:
case 2843:
case 1352:
case 3932:
case 316:
case 3494:
case 2003:
case 1980:
case 1456:
case 672:
case 1470:
case 2517:
case 2129:
case 1213:
case 1942:
case 4094:
case 791:
case 3789:
case 3577:
case 2763:
case 3468:
case 3272:
case 203:
case 808:
case 1391:
case 1041:
case 125:
case 1762:
case 872:
case 938:
case 1801:
case 2726:
case 13:
case 4038:
case 3780:
case 3103:
case 3438:
case 2065:
case 781:
case 2733:
case 2315:
case 166:
case 3742:
case 3311:
case 3092:
case 1027:
case 3693:
case 3688:
case 3594:
case 3155:
case 1875:
case 315:
case 2417:
case 591:
case 832:
case 1332:
case 1404:
case 2627:
case 187:
case 1556:
case 1570:
case 3852:
case 3380:
case 17:
case 197:
case 2507:
case 3446:
case 1514:
case 1012:
case 1362:
case 94:
case 1787:
case 2363:
case 2612:
case 1975:
case 148:
case 2013:
case 632:
case 3073:
case 2055:
case 1911:
case 704:
case 1286:
case 1655:
case 492:
case 3538:
case 790:
case 2241:
case 1193:
case 739:
case 3301:
case 38:
case 2995:
case 3477:
case 2928:
case 126:
case 3113:
case 2753:
case 1811:
case 579:
case 3458:
case 3897:
case 3254:
case 883:
case 288:
case 2836:
case 2580:
case 2247:
case 112:
case 2823:
case 3533:
case 627:
case 3881:
case 1296:
case 1700:
case 1917:
case 3634:
case 2904:
case 3981:
case 4053:
case 1817:
case 2985:
case 1709:
case 3606:
case 893:
case 1922:
case 3453:
case 2475:
case 3307:
case 578:
case 3118:
case 2411:
case 827:
case 3082:
case 1134:
case 436:
case 1374:
case 3584:
case 2669:
case 2338:
case 401:
case 341:
case 1021:
case 3040:
case 1319:
case 2630:
case 1069:
case 696:
case 46:
case 693:
case 350:
case 1428:
case 2259:
case 1208:
case 1106:
case 2368:
case 2501:
case 2639:
case 3722:
case 1797:
case 2018:
case 417:
case 3505:
case 149:
case 1164:
case 3799:
case 3322:
case 1696:
case 1907:
case 473:
case 2914:
case 1397:
case 3463:
case 3234:
case 1047:
case 885:
case 2870:
case 3654:
case 980:
case 2096:
case 3571:
case 2346:
case 3553:
case 2575:
case 2879:
case 4033:
case 990:
case 3206:
case 3108:
case 939:
case 3790:
case 3616:
case 3426:
case 3317:
case 1807:
case 1774:
case 476:
case 2956:
case 2738:
case 895:
case 3910:
case 1309:
case 3707:
case 1050:
case 74:
case 1595:
case 340:
case 42:
case 1528:
case 3874:
case 2230:
case 2221:
case 159:
case 2848:
case 2650:
case 400:
case 2401:
case 3298:
case 685:
case 702:
case 3819:
case 3515:
case 5:
case 2948:
case 3484:
case 2239:
case 3919:
case 1300:
case 1059:
case 2794:
case 2008:
case 2260:
case 1116:
case 3810:
case 1899:
case 4084:
case 3974:
case 435:
case 351:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755424801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,];
var gg_b = "1755424801/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
