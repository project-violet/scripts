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
var o = 1;
switch (g) {
case 3479:
case 2068:
case 2256:
case 2011:
case 604:
case 793:
case 3259:
case 3781:
case 2476:
case 900:
case 2590:
case 3115:
case 348:
case 3364:
case 758:
case 1005:
case 1977:
case 1919:
case 3621:
case 3944:
case 967:
case 921:
case 1159:
case 2933:
case 867:
case 821:
case 3646:
case 503:
case 2837:
case 2583:
case 2124:
case 962:
case 3242:
case 641:
case 3001:
case 4001:
case 1111:
case 978:
case 878:
case 1604:
case 3047:
case 274:
case 256:
case 2441:
case 530:
case 1397:
case 2545:
case 3300:
case 2770:
case 2188:
case 2554:
case 833:
case 1869:
case 3429:
case 2412:
case 2765:
case 2059:
case 158:
case 1708:
case 3268:
case 1142:
case 3056:
case 193:
case 2230:
case 1335:
case 2426:
case 3144:
case 2480:
case 3617:
case 3277:
case 3219:
case 749:
case 2974:
case 3457:
case 1818:
case 2133:
case 2027:
case 372:
case 2676:
case 582:
case 468:
case 3421:
case 3525:
case 825:
case 3602:
case 947:
case 1896:
case 2449:
case 2298:
case 1834:
case 2350:
case 1255:
case 2881:
case 1244:
case 431:
case 925:
case 3795:
case 1119:
case 4009:
case 3009:
case 3446:
case 942:
case 3560:
case 2209:
case 627:
case 661:
case 3865:
case 2336:
case 3575:
case 3740:
case 1404:
case 645:
case 1033:
case 1546:
case 1766:
case 1348:
case 1942:
case 842:
case 1968:
case 2924:
case 3251:
case 638:
case 4016:
case 3629:
case 1791:
case 1106:
case 574:
case 384:
case 2732:
case 3471:
case 2514:
case 1557:
case 2452:
case 25:
case 230:
case 377:
case 587:
case 2905:
case 3022:
case 556:
case 3964:
case 100:
case 1319:
case 1377:
case 311:
case 3485:
case 733:
case 3013:
case 4013:
case 2267:
case 1852:
case 3691:
case 2825:
case 1082:
case 778:
case 3355:
case 606:
case 3344:
case 121:
case 2790:
case 1763:
case 2754:
case 1779:
case 590:
case 2875:
case 1997:
case 210:
case 2434:
case 1050:
case 1849:
case 2860:
case 1306:
case 162:
case 721:
case 767:
case 3443:
case 178:
case 1239:
case 1637:
case 1162:
case 1351:
case 3262:
case 1880:
case 1935:
case 958:
case 700:
case 1702:
case 993:
case 869:
case 1585:
case 969:
case 2213:
case 4067:
case 276:
case 893:
case 3067:
case 2182:
case 57:
case 2136:
case 2418:
case 3814:
case 3900:
case 254:
case 2035:
case 3685:
case 3078:
case 4078:
case 1440:
case 60:
case 3131:
case 315:
case 1826:
case 3466:
case 3890:
case 2423:
case 2228:
case 4053:
case 491:
case 391:
case 589:
case 3164:
case 1807:
case 479:
case 2950:
case 2292:
case 2284:
case 742:
case 452:
case 352:
case 1948:
case 725:
case 1342:
case 4084:
case 913:
case 3084:
case 3589:
case 2696:
case 1681:
case 2982:
case 357:
case 486:
case 386:
case 576:
case 457:
case 554:
case 1010:
case 3100:
case 2253:
case 510:
case 1197:
case 3775:
case 290:
case 3028:
case 3540:
case 2305:
case 3854:
case 2458:
case 849:
case 949:
case 653:
case 2278:
case 3235:
case 2661:
case 1495:
case 2324:
case 1746:
case 3210:
case 500:
case 2489:
case 2807:
case 1097:
case 1950:
case 2903:
case 3665:
case 1292:
case 3486:
case 3432:
case 2771:
case 77:
case 2841:
case 3752:
case 3356:
case 2440:
case 2812:
case 1469:
case 803:
case 364:
case 2359:
case 464:
case 1374:
case 3863:
case 3000:
case 567:
case 3573:
case 1110:
case 4064:
case 2197:
case 3064:
case 2200:
case 1458:
case 3817:
case 930:
case 95:
case 3523:
case 85:
case 830:
case 2876:
case 562:
case 1278:
case 2962:
case 2495:
case 488:
case 1324:
case 2746:
case 578:
case 2135:
case 533:
case 2591:
case 2342:
case 1634:
case 3620:
case 405:
case 3031:
case 1714:
case 2757:
case 4031:
case 1388:
case 696:
case 2437:
case 3153:
case 4039:
case 1520:
case 3596:
case 982:
case 2689:
case 2287:
case 3712:
case 710:
case 2599:
case 1790:
case 2763:
case 3707:
case 3928:
case 189:
case 2319:
case 2377:
case 3322:
case 525:
case 2103:
case 1669:
case 1267:
case 3871:
case 444:
case 754:
case 1783:
case 1062:
case 776:
case 1623:
case 547:
case 2852:
case 608:
case 3518:
case 2351:
case 1658:
case 6:
case 2148:
case 789:
case 3978:
case 3372:
case 2585:
case 176:
case 1213:
case 542:
case 1194:
case 616:
case 1182:
case 1136:
case 3821:
case 420:
case 320:
case 154:
case 401:
case 974:
case 301:
case 110:
case 2997:
case 2050:
case 3113:
case 1745:
case 3294:
case 1003:
case 1496:
case 1860:
case 2849:
case 3236:
case 856:
case 887:
case 2508:
case 2475:
case 3758:
case 3233:
case 1449:
case 1006:
case 2896:
case 2460:
case 1298:
case 2834:
case 3438:
case 3116:
case 2255:
case 466:
case 2303:
case 3947:
case 1881:
case 3843:
case 3654:
case 1222:
case 3367:
case 3645:
case 1974:
case 2959:
case 1133:
case 75:
case 3414:
case 1216:
case 1051:
case 3956:
case 103:
case 2571:
case 3930:
case 3885:
case 2968:
case 1612:
case 890:
case 2791:
case 2106:
case 3313:
case 2521:
case 1514:
case 3109:
case 1626:
case 1905:
case 1077:
case 1019:
case 3549:
case 1209:
case 3593:
case 4044:
case 1538:
case 2425:
case 3769:
case 1988:
case 4055:
case 636:
case 2127:
case 3683:
case 593:
case 2151:
case 2942:
case 1641:
case 2215:
case 1649:
case 2660:
case 1693:
case 2159:
case 3638:
case 346:
case 787:
case 3998:
case 756:
case 3384:
case 3541:
case 3761:
case 774:
case 1583:
case 1042:
case 1837:
case 3454:
case 1680:
case 2858:
case 2529:
case 1068:
case 3734:
case 889:
case 3101:
case 3796:
case 3147:
case 3274:
case 989:
case 1476:
case 2563:
case 3328:
case 1895:
case 2005:
case 3922:
case 3205:
case 976:
case 269:
case 2579:
case 954:
case 2869:
case 63:
case 2074:
case 1059:
case 258:
case 3378:
case 876:
case 3224:
case 2951:
case 3576:
case 2335:
case 2823:
case 1426:
case 1124:
case 2168:
case 549:
case 3288:
case 614:
case 1105:
case 156:
case 187:
case 782:
case 4015:
case 3555:
case 419:
case 1399:
case 1038:
case 1204:
case 3093:
case 1225:
case 1171:
case 508:
case 2046:
case 2409:
case 2887:
case 647:
case 3080:
case 4080:
case 3271:
case 1929:
case 1519:
case 1577:
case 3104:
case 798:
case 10:
case 1014:
case 2057:
case 129:
case 480:
case 3175:
case 1917:
case 2954:
case 3160:
case 234:
case 3659:
case 2138:
case 838:
case 2945:
case 938:
case 2071:
case 729:
case 1385:
case 3419:
case 3477:
case 3052:
case 4052:
case 5:
case 3246:
case 1506:
case 2839:
case 973:
case 1455:
case 1902:
case 2601:
case 861:
case 1260:
case 21:
case 2293:
case 961:
case 3882:
case 59:
case 2114:
case 873:
case 1121:
case 3337:
case 2241:
case 332:
case 432:
case 3925:
case 2831:
case 285:
case 3515:
case 3810:
case 3442:
case 1163:
case 2190:
case 1559:
case 499:
case 2864:
case 600:
case 399:
case 371:
case 2226:
case 3263:
case 581:
case 3395:
case 1054:
case 2079:
case 471:
case 2430:
case 904:
case 1703:
case 3411:
case 2750:
case 1045:
case 2212:
case 1971:
case 3076:
case 3651:
case 463:
case 363:
case 3739:
case 1748:
case 1511:
case 1366:
case 1102:
case 1878:
case 2524:
case 2029:
case 596:
case 2505:
case 3340:
case 29:
case 51:
case 1957:
case 1090:
case 3026:
case 2800:
case 2063:
case 2622:
case 4026:
case 3677:
case 3619:
case 1853:
case 2456:
case 1644:
case 437:
case 965:
case 1179:
case 2154:
case 1117:
case 4007:
case 3975:
case 2332:
case 2401:
case 534:
case 1542:
case 1391:
case 662:
case 2698:
case 4041:
case 678:
case 1415:
case 1762:
case 3497:
case 3648:
case 2383:
case 2920:
case 773:
case 2510:
case 1086:
case 1777:
case 1719:
case 3195:
case 2815:
case 355:
case 1999:
case 455:
case 3531:
case 745:
case 1295:
case 2390:
case 3435:
case 2273:
case 4069:
case 3069:
case 3755:
case 2733:
case 1329:
case 312:
case 829:
case 3662:
case 2258:
case 1985:
case 3266:
case 4058:
case 2428:
case 3824:
case 998:
case 1535:
case 1706:
case 1191:
case 294:
case 514:
case 2186:
case 2345:
case 1240:
case 3805:
case 1379:
case 317:
case 2970:
case 127:
case 161:
case 2965:
case 3603:
case 53:
case 2492:
case 3888:
case 2484:
case 236:
case 3140:
case 1727:
case 145:
case 1431:
case 1166:
case 1289:
case 1751:
case 906:
case 1439:
case 1503:
case 3697:
case 3448:
case 2844:
case 2550:
case 2774:
case 1065:
case 1759:
case 1281:
case 2855:
case 351:
case 741:
case 3304:
case 451:
case 392:
case 2008:
case 492:
case 3325:
case 806:
case 2085:
case 3635:
case 1371:
case 2413:
case 2678:
case 2120:
case 3181:
case 439:
case 1199:
case 339:
case 3462:
case 1321:
case 2788:
case 23:
case 250:
case 1357:
case 658:
case 3018:
case 4018:
case 1872:
case 1108:
case 1562:
case 1742:
case 704:
case 3061:
case 3285:
case 1966:
case 1346:
case 2724:
case 3989:
case 2692:
case 3539:
case 1020:
case 918:
case 1711:
case 2684:
case 818:
case 1631:
case 2932:
case 3360:
case 165:
case 497:
case 2594:
case 1487:
case 2582:
case 2099:
case 1809:
case 2043:
case 1261:
case 1085:
case 3352:
case 340:
case 440:
case 2371:
case 908:
case 3134:
case 522:
case 3196:
case 3701:
case 204:
case 3747:
case 3973:
case 808:
case 1653:
case 2143:
case 3567:
case 2822:
case 3877:
case 2439:
case 2070:
case 2503:
case 1844:
case 985:
case 2065:
case 1855:
case 1008:
case 2898:
case 1234:
case 3436:
case 3118:
case 714:
case 538:
case 2346:
case 2768:
case 241:
case 1692:
case 2020:
case 870:
case 2548:
case 1684:
case 3265:
case 3393:
case 114:
case 2631:
case 3081:
case 674:
case 687:
case 1705:
case 3610:
case 3270:
case 2487:
case 2809:
case 99:
case 3513:
case 1628:
case 1788:
case 13:
case 1165:
case 424:
case 2357:
case 545:
case 2108:
case 1467:
case 2872:
case 2562:
case 3851:
case 483:
case 383:
case 89:
case 2966:
case 2363:
case 460:
case 360:
case 3040:
case 3528:
case 1733:
case 3312:
case 1453:
case 603:
case 794:
case 3961:
case 2400:
case 1066:
case 3089:
case 3341:
case 2237:
case 3584:
case 3158:
case 881:
case 3996:
case 3716:
case 2847:
case 2032:
case 2086:
case 2719:
case 307:
case 2999:
case 3307:
case 996:
case 91:
case 2597:
case 3232:
case 1965:
case 3286:
case 1484:
case 3650:
case 3169:
case 2908:
case 302:
case 3772:
case 2727:
case 402:
case 245:
case 2431:
case 2166:
case 3123:
case 4037:
case 3410:
case 3842:
case 2687:
case 541:
case 2464:
case 3811:
case 2535:
case 2191:
case 565:
case 3553:
case 1345:
case 2240:
case 1269:
case 3709:
case 630:
case 3095:
case 2379:
case 2317:
case 2559:
case 689:
case 3424:
case 3290:
case 1430:
case 2054:
case 1017:
case 1079:
case 2703:
case 3373:
case 7:
case 2045:
case 1750:
case 1212:
case 716:
case 3405:
case 3141:
case 3501:
case 1241:
case 3488:
case 3283:
case 1002:
case 770:
case 1831:
case 185:
case 3767:
case 206:
case 1207:
case 3547:
case 1190:
case 2179:
case 2117:
case 610:
case 3897:
case 1938:
case 2655:
case 1332:
case 3949:
case 1401:
case 2542:
case 3633:
case 2083:
case 1447:
case 553:
case 1698:
case 598:
case 785:
case 814:
case 2762:
case 3835:
case 83:
case 850:
case 2366:
case 3323:
case 2102:
case 3474:
case 1524:
case 1616:
case 676:
case 3369:
case 1505:
case 19:
case 2957:
case 1914:
case 2090:
case 1622:
case 2921:
case 950:
case 2853:
case 1456:
case 1252:
case 1630:
case 2929:
case 2519:
case 3522:
case 2867:
case 20:
case 2014:
case 1057:
case 1021:
case 1710:
case 181:
case 3075:
case 3728:
case 3907:
case 2399:
case 3060:
case 4060:
case 1983:
case 1320:
case 2171:
case 3334:
case 1409:
case 1887:
case 796:
case 3180:
case 3848:
case 2735:
case 2444:
case 2506:
case 1839:
case 836:
case 2308:
case 2902:
case 1647:
case 1249:
case 3433:
case 4004:
case 1498:
case 1370:
case 2275:
case 2615:
case 936:
case 2121:
case 409:
case 690:
case 3193:
case 32:
case 3149:
case 3674:
case 42:
case 1138:
case 1416:
case 1945:
case 1071:
case 3976:
case 3862:
case 1280:
case 2385:
case 2527:
case 1656:
case 2000:
case 2863:
case 3826:
case 1466:
case 1053:
case 643:
case 2967:
case 3359:
case 1131:
case 264:
case 1725:
case 2558:
case 2356:
case 972:
case 1685:
case 447:
case 347:
case 786:
case 831:
case 1537:
case 1883:
case 3771:
case 1608:
case 325:
case 3231:
case 2210:
case 1315:
case 179:
case 3489:
case 1297:
case 1643:
case 3010:
case 520:
case 1100:
case 205:
case 186:
case 157:
case 752:
case 1084:
case 791:
case 2620:
case 779:
case 1589:
case 2780:
case 3342:
case 3591:
case 1939:
case 3495:
case 3962:
case 2330:
case 3746:
case 715:
case 3368:
case 3311:
case 923:
case 877:
case 2793:
case 823:
case 3197:
case 2879:
case 1854:
case 2817:
case 1540:
case 1666:
case 1187:
case 78:
case 2741:
case 2561:
case 244:
case 3640:
case 300:
case 2707:
case 400:
case 111:
case 3319:
case 671:
case 321:
case 1344:
case 421:
case 935:
case 564:
case 2686:
case 4082:
case 2632:
case 1931:
case 1203:
case 2167:
case 1408:
case 4094:
case 1355:
case 2712:
case 632:
case 2398:
case 2465:
case 2470:
case 3287:
case 3637:
case 2087:
case 3239:
case 1499:
case 378:
case 795:
case 588:
case 2846:
case 3508:
case 1248:
case 3162:
case 2776:
case 4050:
case 2294:
case 3050:
case 1838:
case 2113:
case 3893:
case 2282:
case 201:
case 3717:
case 2309:
case 1900:
case 3695:
case 220:
case 2953:
case 1814:
case 2857:
case 505:
case 3702:
case 2978:
case 3327:
case 2372:
case 3351:
case 3148:
case 3880:
case 3935:
case 1262:
case 784:
case 3571:
case 3861:
case 1421:
case 2552:
case 1457:
case 2414:
case 546:
case 777:
case 172:
case 2198:
case 2367:
case 2645:
case 1155:
case 3959:
case 159:
case 723:
case 1277:
case 1144:
case 131:
case 1795:
case 3119:
case 3244:
case 1446:
case 1009:
case 2899:
case 655:
case 2773:
case 979:
case 852:
case 991:
case 3303:
case 2947:
case 1820:
case 3460:
case 2233:
case 2438:
case 879:
case 1525:
case 2758:
case 3348:
case 313:
case 3942:
case 413:
case 731:
case 3404:
case 3127:
case 2172:
case 4033:
case 1575:
case 1740:
case 2593:
case 1870:
case 986:
case 2109:
case 617:
case 772:
case 177:
case 768:
case 184:
case 2313:
case 3521:
case 2580:
case 1016:
case 1629:
case 1227:
case 2930:
case 2885:
case 759:
case 1251:
case 1789:
case 639:
case 3743:
case 1621:
case 4005:
case 2922:
case 3977:
case 3005:
case 1781:
case 1657:
case 26:
case 911:
case 2147:
case 2526:
case 3563:
case 3873:
case 2734:
case 2796:
case 2101:
case 2512:
case 1479:
case 3858:
case 2761:
case 2156:
case 1646:
case 246:
case 692:
case 2718:
case 54:
case 2541:
case 135:
case 2507:
case 3660:
case 4088:
case 1944:
case 697:
case 3604:
case 1886:
case 2483:
case 1832:
case 1047:
case 3625:
case 3906:
case 1001:
case 3111:
case 3502:
case 3168:
case 3785:
case 2130:
case 1056:
case 3142:
case 493:
case 1463:
case 3823:
case 3335:
case 748:
case 458:
case 1671:
case 2972:
case 3517:
case 3579:
case 4074:
case 369:
case 1156:
case 568:
case 4042:
case 1384:
case 482:
case 1998:
case 146:
case 382:
case 559:
case 2402:
case 1507:
case 2331:
case 3649:
case 2955:
case 2944:
case 2364:
case 1328:
case 2621:
case 844:
case 1922:
case 3895:
case 2259:
case 1147:
case 16:
case 1526:
case 1916:
case 3720:
case 1796:
case 3680:
case 944:
case 2030:
case 2479:
case 3068:
case 640:
case 683:
case 76:
case 2268:
case 1866:
case 3426:
case 1576:
case 1378:
case 820:
case 2211:
case 3840:
case 2429:
case 920:
case 3188:
case 3554:
case 624:
case 1205:
case 3545:
case 3770:
case 1353:
case 456:
case 356:
case 1909:
case 1288:
case 374:
case 1483:
case 901:
case 2001:
case 2242:
case 1130:
case 231:
case 2009:
case 548:
case 2446:
case 1773:
case 166:
case 3350:
case 2820:
case 3493:
case 1233:
case 1901:
case 2602:
case 1116:
case 1438:
case 3298:
case 2387:
case 2525:
case 303:
case 1956:
case 3051:
case 403:
case 2737:
case 864:
case 2421:
case 1552:
case 14:
case 1414:
case 2457:
case 3133:
case 3216:
case 2072:
case 1198:
case 1645:
case 1367:
case 2155:
case 3974:
case 535:
case 259:
case 2679:
case 2219:
case 1654:
case 2277:
case 3452:
case 330:
case 430:
case 45:
case 74:
case 3019:
case 2022:
case 277:
case 3905:
case 2663:
case 4019:
case 1690:
case 4077:
case 284:
case 2471:
case 1313:
case 1580:
case 2016:
case 2629:
case 3272:
case 2227:
case 3612:
case 1930:
case 223:
case 2251:
case 805:
case 3641:
case 2098:
case 1808:
case 2206:
case 3336:
case 2865:
case 3394:
case 3988:
case 1055:
case 1769:
case 2740:
case 2560:
case 1593:
case 3538:
case 3910:
case 1726:
case 2344:
case 1686:
case 295:
case 2408:
case 1167:
case 1250:
case 1984:
case 701:
case 1398:
case 3825:
case 1992:
case 2691:
case 1534:
case 1039:
case 946:
case 1470:
case 3520:
case 2666:
case 3623:
case 552:
case 3062:
case 86:
case 2187:
case 1316:
case 1561:
case 144:
case 3669:
case 3150:
case 389:
case 1928:
case 489:
case 1707:
case 211:
case 2485:
case 354:
case 1953:
case 454:
case 3213:
case 3418:
case 1857:
case 2814:
case 28:
case 2139:
case 2262:
case 1294:
case 3745:
case 1113:
case 2838:
case 3570:
case 1282:
case 3003:
case 3496:
case 3860:
case 3754:
case 310:
case 3565:
case 3875:
case 1752:
case 866:
case 2987:
case 252:
case 2883:
case 1486:
case 3292:
case 2537:
case 1301:
case 3284:
case 1347:
case 3097:
case 2164:
case 1128:
case 279:
case 1670:
case 966:
case 1573:
case 1863:
case 2466:
case 2890:
case 3228:
case 3110:
case 2595:
case 1967:
case 215:
case 3374:
case 595:
case 164:
case 1192:
case 1558:
case 3469:
case 1356:
case 3035:
case 2685:
case 1330:
case 3661:
case 3324:
case 3473:
case 1523:
case 3618:
case 3278:
case 2760:
case 1749:
case 62:
case 1913:
case 609:
case 490:
case 3253:
case 1879:
case 1817:
case 2297:
case 3532:
case 2699:
case 3586:
case 105:
case 58:
case 37:
case 47:
case 3714:
case 3982:
case 286:
case 3994:
case 257:
case 3634:
case 3696:
case 2092:
case 1937:
case 2756:
case 192:
case 1325:
case 2436:
case 1587:
case 3281:
case 3759:
case 1304:
case 151:
case 4070:
case 3503:
case 1243:
case 3439:
case 832:
case 560:
case 1448:
case 3143:
case 2819:
case 3822:
case 1462:
case 507:
case 2567:
case 971:
case 1181:
case 863:
case 2973:
case 999:
case 899:
case 2134:
case 3371:
case 871:
case 2352:
case 283:
case 3742:
case 2851:
case 3966:
case 2923:
case 1285:
case 1018:
case 502:
case 3562:
case 2827:
case 3872:
case 2969:
case 3357:
case 2513:
case 3664:
case 792:
case 197:
case 3809:
case 1375:
case 365:
case 1360:
case 2393:
case 2081:
case 837:
case 1096:
case 2806:
case 1539:
case 4020:
case 3711:
case 3768:
case 3346:
case 441:
case 751:
case 3185:
case 1195:
case 3719:
case 2722:
case 3777:
case 3943:
case 919:
case 2173:
case 4032:
case 3086:
case 2682:
case 3032:
case 4086:
case 3801:
case 422:
case 819:
case 322:
case 3237:
case 2089:
case 2341:
case 1648:
case 668:
case 3400:
case 875:
case 2961:
case 2918:
case 2312:
case 3329:
case 1069:
case 2040:
case 943:
case 2528:
case 659:
case 975:
case 1435:
case 1744:
case 3295:
case 3363:
case 260:
case 117:
case 712:
case 3379:
case 677:
case 3240:
case 1073:
case 3535:
case 3191:
case 3830:
case 3985:
case 623:
case 338:
case 3464:
case 2123:
case 3166:
case 3751:
case 473:
case 2410:
case 2037:
case 2842:
case 3289:
case 3727:
case 2772:
case 202:
case 3908:
case 755:
case 445:
case 3431:
case 345:
case 1291:
case 2286:
case 1603:
case 2169:
case 327:
case 361:
case 427:
case 951:
case 1442:
case 892:
case 2126:
case 3163:
case 2767:
case 2488:
case 3884:
case 132:
case 737:
case 2112:
case 3892:
case 992:
case 2501:
case 1337:
case 851:
case 2952:
case 1787:
case 839:
case 1229:
case 2556:
case 3703:
case 728:
case 3045:
case 1411:
case 939:
case 4045:
case 3559:
case 3054:
case 1263:
case 2290:
case 1619:
case 1677:
case 4090:
case 2369:
case 3957:
case 763:
case 3878:
case 2474:
case 128:
case 3366:
case 2835:
case 1041:
case 1389:
case 318:
case 418:
case 3762:
case 897:
case 1202:
case 2633:
case 997:
case 2993:
case 1960:
case 137:
case 3179:
case 3644:
case 1007:
case 2941:
case 3225:
case 3171:
case 3038:
case 2688:
case 1850:
case 1093:
case 1406:
case 2060:
case 1381:
case 691:
case 3343:
case 119:
case 3399:
case 2907:
case 679:
case 2605:
case 3963:
case 2926:
case 329:
case 3867:
case 40:
case 3014:
case 615:
case 1731:
case 30:
case 4014:
case 2792:
case 1125:
case 2784:
case 1271:
case 3929:
case 912:
case 1668:
case 2516:
case 2361:
case 3527:
case 2862:
case 1419:
case 3385:
case 775:
case 498:
case 1052:
case 817:
case 0:
case 453:
case 743:
case 1659:
case 1257:
case 917:
case 2149:
case 3813:
case 209:
case 180:
case 3797:
case 3979:
case 3917:
case 3275:
case 1700:
case 3157:
case 1882:
case 3260:
case 1894:
case 2004:
case 686:
case 657:
case 3455:
case 3308:
case 2778:
case 719:
case 3902:
case 2848:
case 3444:
case 3506:
case 1246:
case 4021:
case 3710:
case 2104:
case 275:
case 1792:
case 2125:
case 1318:
case 532:
case 2271:
case 2611:
case 1912:
case 1784:
case 3252:
case 1624:
case 2668:
case 1361:
case 1516:
case 2080:
case 4046:
case 563:
case 1152:
case 1598:
case 807:
case 3983:
case 1334:
case 2544:
case 1688:
case 2850:
case 2093:
case 2406:
case 1060:
case 571:
case 2555:
case 381:
case 481:
case 219:
case 1753:
case 3370:
case 605:
case 3293:
case 31:
case 1509:
case 3647:
case 2894:
case 3601:
case 1180:
case 528:
case 1572:
case 3422:
case 1862:
case 2419:
case 3656:
case 4071:
case 1976:
case 3071:
case 2257:
case 1214:
case 1193:
case 3945:
case 3138:
case 109:
case 280:
case 2221:
case 537:
case 1405:
case 1141:
case 2651:
case 2076:
case 3212:
case 2627:
case 644:
case 1556:
case 3183:
case 2411:
case 3864:
case 3430:
case 4017:
case 3226:
case 1290:
case 543:
case 3207:
case 2810:
case 485:
case 1488:
case 1112:
case 2925:
case 2606:
case 4002:
case 3002:
case 1283:
case 1501:
case 2041:
case 2389:
case 3447:
case 1633:
case 2202:
case 1176:
case 126:
case 3938:
case 3386:
case 1993:
case 2960:
case 237:
case 601:
case 1897:
case 2007:
case 470:
case 4063:
case 2217:
case 3063:
case 620:
case 1245:
case 2340:
case 1369:
case 883:
case 3736:
case 3524:
case 4029:
case 3029:
case 2012:
case 983:
case 228:
case 3:
case 824:
case 4:
case 1980:
case 1835:
case 3453:
case 2023:
case 3733:
case 64:
case 1918:
case 1798:
case 592:
case 1040:
case 551:
case 3273:
case 3478:
case 1859:
case 2874:
case 1528:
case 2564:
case 2744:
case 1326:
case 107:
case 2531:
case 1307:
case 1173:
case 3510:
case 1682:
case 1934:
case 1716:
case 1341:
case 1089:
case 2648:
case 1158:
case 1584:
case 1842:
case 1410:
case 707:
case 102:
case 2291:
case 1286:
case 3965:
case 2603:
case 1232:
case 3484:
case 3970:
case 1709:
case 217:
case 92:
case 597:
case 1095:
case 494:
case 3186:
case 3132:
case 3269:
case 3345:
case 909:
case 1376:
case 1811:
case 760:
case 1578:
case 2189:
case 3428:
case 239:
case 555:
case 1877:
case 66:
case 3413:
case 1196:
case 3120:
case 3261:
case 724:
case 140:
case 1161:
case 2937:
case 1756:
case 3234:
case 512:
case 1494:
case 2325:
case 2587:
case 2833:
case 1118:
case 2304:
case 2243:
case 2697:
case 3550:
case 297:
case 3099:
case 3582:
case 3043:
case 4043:
case 1270:
case 1610:
case 926:
case 2375:
case 3986:
case 3932:
case 1081:
case 1349:
case 314:
case 1393:
case 1265:
case 2403:
case 1806:
case 3692:
case 826:
case 2989:
case 1730:
case 1923:
case 2061:
case 3467:
case 740:
case 43:
case 124:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749884401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,];
var gg_b = "1749884401/";

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
