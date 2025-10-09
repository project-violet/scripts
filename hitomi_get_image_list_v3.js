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
case 3009:
case 1047:
case 1433:
case 3023:
case 2120:
case 1588:
case 1321:
case 2132:
case 1013:
case 1500:
case 330:
case 2656:
case 618:
case 3630:
case 3145:
case 1612:
case 2704:
case 1405:
case 2649:
case 1660:
case 4026:
case 1326:
case 982:
case 3463:
case 1692:
case 2681:
case 407:
case 2651:
case 581:
case 397:
case 1123:
case 3486:
case 2304:
case 3449:
case 1407:
case 3113:
case 2422:
case 3844:
case 1878:
case 420:
case 676:
case 3247:
case 1916:
case 2535:
case 87:
case 190:
case 3850:
case 3193:
case 2675:
case 3477:
case 3808:
case 177:
case 3293:
case 1726:
case 1996:
case 3716:
case 3791:
case 2062:
case 579:
case 592:
case 1944:
case 67:
case 2736:
case 1679:
case 3595:
case 3750:
case 2077:
case 2081:
case 3816:
case 467:
case 893:
case 1826:
case 2105:
case 1950:
case 234:
case 3515:
case 1908:
case 453:
case 3410:
case 2205:
case 3022:
case 1432:
case 88:
case 1012:
case 732:
case 3896:
case 1420:
case 2133:
case 3030:
case 815:
case 2075:
case 2690:
case 155:
case 2063:
case 3160:
case 158:
case 3350:
case 828:
case 999:
case 2662:
case 539:
case 3260:
case 2207:
case 1222:
case 2953:
case 2610:
case 3212:
case 799:
case 2107:
case 531:
case 1645:
case 1378:
case 3344:
case 2502:
case 3112:
case 2804:
case 843:
case 935:
case 3732:
case 3990:
case 3720:
case 598:
case 3478:
case 1444:
case 542:
case 3807:
case 3962:
case 3104:
case 164:
case 2461:
case 506:
case 3248:
case 1274:
case 2860:
case 1932:
case 2892:
case 3082:
case 735:
case 210:
case 2678:
case 812:
case 351:
case 2296:
case 152:
case 2211:
case 949:
case 2747:
case 220:
case 822:
case 4010:
case 3320:
case 56:
case 3833:
case 978:
case 669:
case 975:
case 2923:
case 2909:
case 2291:
case 359:
case 2779:
case 2116:
case 2191:
case 1390:
case 1152:
case 749:
case 1182:
case 2538:
case 4090:
case 1048:
case 1557:
case 1571:
case 2483:
case 1763:
case 1351:
case 622:
case 1381:
case 1377:
case 2180:
case 1905:
case 2893:
case 2150:
case 4051:
case 4077:
case 4081:
case 2280:
case 3236:
case 2360:
case 3682:
case 1161:
case 3307:
case 4086:
case 1349:
case 2847:
case 1266:
case 2813:
case 2312:
case 4049:
case 3963:
case 988:
case 2621:
case 1153:
case 91:
case 2546:
case 1183:
case 963:
case 2760:
case 2452:
case 2482:
case 2589:
case 2559:
case 3949:
case 4063:
case 2922:
case 1648:
case 1283:
case 1375:
case 4075:
case 2792:
case 3061:
case 3986:
case 1751:
case 1564:
case 1781:
case 1777:
case 3956:
case 3820:
case 72:
case 2541:
case 2845:
case 3981:
case 1756:
case 609:
case 2712:
case 71:
case 50:
case 1749:
case 957:
case 3707:
case 2968:
case 1199:
case 755:
case 392:
case 758:
case 379:
case 429:
case 1165:
case 1497:
case 2579:
case 3706:
case 3654:
case 29:
case 1299:
case 3684:
case 1355:
case 3067:
case 1771:
case 1757:
case 2513:
case 3129:
case 2000:
case 371:
case 199:
case 2142:
case 421:
case 3235:
case 2088:
case 172:
case 2547:
case 1443:
case 3427:
case 1037:
case 2242:
case 3987:
case 3957:
case 411:
case 3203:
case 1219:
case 1906:
case 958:
case 3099:
case 2338:
case 2859:
case 1785:
case 1590:
case 1755:
case 265:
case 3065:
case 4057:
case 2794:
case 1469:
case 2270:
case 339:
case 1495:
case 3672:
case 2924:
case 1167:
case 3532:
case 3834:
case 694:
case 1029:
case 3520:
case 1376:
case 987:
case 132:
case 2545:
case 402:
case 1035:
case 2025:
case 2688:
case 2658:
case 2600:
case 3040:
case 2419:
case 2039:
case 3507:
case 3398:
case 1855:
case 2560:
case 2297:
case 777:
case 4028:
case 2197:
case 3318:
case 894:
case 2592:
case 3054:
case 1577:
case 1581:
case 182:
case 937:
case 3798:
case 1240:
case 2115:
case 1629:
case 597:
case 3458:
case 1002:
case 273:
case 3488:
case 3801:
case 1140:
case 3400:
case 1728:
case 205:
case 2467:
case 208:
case 1364:
case 2195:
case 3699:
case 1284:
case 1575:
case 3673:
case 3072:
case 1871:
case 2269:
case 3806:
case 1184:
case 1942:
case 219:
case 2085:
case 157:
case 2206:
case 3138:
case 229:
case 827:
case 3591:
case 1825:
case 12:
case 2999:
case 2703:
case 211:
case 350:
case 740:
case 1268:
case 4058:
case 3511:
case 2101:
case 3596:
case 1358:
case 1839:
case 2337:
case 4000:
case 1646:
case 904:
case 185:
case 188:
case 3988:
case 1689:
case 3294:
case 1659:
case 468:
case 2057:
case 246:
case 465:
case 2071:
case 547:
case 2548:
case 1418:
case 2664:
case 1970:
case 1758:
case 800:
case 2335:
case 1700:
case 1641:
case 1224:
case 3342:
case 3843:
case 3114:
case 2802:
case 30:
case 1498:
case 2504:
case 514:
case 752:
case 1800:
case 1401:
case 2837:
case 1339:
case 3624:
case 3717:
case 1727:
case 1614:
case 342:
case 2702:
case 1406:
case 3189:
case 2655:
case 3487:
case 3471:
case 306:
case 2685:
case 3457:
case 175:
case 2028:
case 3259:
case 1943:
case 600:
case 3927:
case 952:
case 3369:
case 149:
case 3246:
case 2803:
case 3715:
case 2531:
case 2302:
case 2829:
case 3343:
case 3544:
case 3842:
case 2424:
case 1327:
case 551:
case 860:
case 2198:
case 323:
case 473:
case 1725:
case 3668:
case 764:
case 496:
case 2835:
case 3769:
case 559:
case 1915:
case 3795:
case 964:
case 116:
case 2940:
case 1638:
case 644:
case 3455:
case 405:
case 3939:
case 1396:
case 1311:
case 3588:
case 4011:
case 1245:
case 781:
case 3558:
case 1009:
case 1023:
case 400:
case 130:
case 1630:
case 1145:
case 4016:
case 2262:
case 3326:
case 1391:
case 2883:
case 2382:
case 3079:
case 2162:
case 1475:
case 633:
case 3692:
case 2290:
case 1463:
case 6:
case 3123:
case 1486:
case 2519:
case 2412:
case 197:
case 1213:
case 3721:
case 1796:
case 3045:
case 3991:
case 1711:
case 3223:
case 427:
case 2492:
case 377:
case 1451:
case 2599:
case 1481:
case 673:
case 2565:
case 2782:
case 1716:
case 3726:
case 89:
case 1293:
case 3693:
case 1780:
case 1595:
case 683:
case 931:
case 1978:
case 387:
case 591:
case 1569:
case 2175:
case 739:
case 3826:
case 2263:
case 456:
case 2761:
case 2882:
case 2353:
case 3092:
case 2383:
case 2852:
case 2584:
case 1609:
case 2445:
case 1623:
case 599:
case 3778:
case 572:
case 2936:
case 3613:
case 2540:
case 3420:
case 3012:
case 2766:
case 1022:
case 3432:
case 731:
case 2007:
case 355:
case 1160:
case 358:
case 792:
case 2753:
case 2783:
case 1292:
case 2251:
case 779:
case 2281:
case 2874:
case 4050:
case 1308:
case 1597:
case 971:
case 4008:
case 2177:
case 748:
case 1350:
case 745:
case 3230:
case 2256:
case 2620:
case 3222:
case 2005:
case 2366:
case 2632:
case 1112:
case 665:
case 3645:
case 3527:
case 3130:
case 2033:
case 3378:
case 668:
case 1344:
case 2156:
case 2149:
case 4044:
case 3122:
case 1720:
case 723:
case 3710:
case 1990:
case 200:
case 1104:
case 3886:
case 2830:
case 2096:
case 1478:
case 2323:
case 2524:
case 3444:
case 503:
case 2309:
case 1910:
case 3555:
case 3790:
case 654:
case 96:
case 3274:
case 1653:
case 3920:
case 578:
case 923:
case 1148:
case 3480:
case 3877:
case 3762:
case 3881:
case 3851:
case 2016:
case 1082:
case 1052:
case 2709:
case 352:
case 798:
case 244:
case 795:
case 2221:
case 2644:
case 2993:
case 1833:
case 906:
case 25:
case 4020:
case 1320:
case 2121:
case 3576:
case 2680:
case 2226:
case 159:
case 3863:
case 819:
case 3875:
case 3282:
case 516:
case 662:
case 3557:
case 2126:
case 3587:
case 3571:
case 1074:
case 3390:
case 3152:
case 1661:
case 829:
case 1506:
case 227:
case 995:
case 1518:
case 256:
case 3905:
case 1053:
case 2448:
case 3763:
case 557:
case 3528:
case 3381:
case 1652:
case 611:
case 862:
case 2330:
case 3386:
case 2178:
case 4007:
case 260:
case 3356:
case 52:
case 2809:
case 2823:
case 1307:
case 51:
case 70:
case 2278:
case 2611:
case 619:
case 1733:
case 304:
case 3166:
case 3416:
case 766:
case 494:
case 3491:
case 2008:
case 2050:
case 3153:
case 3036:
case 1986:
case 3363:
case 3862:
case 2912:
case 1674:
case 3253:
case 3648:
case 602:
case 3810:
case 2044:
case 84:
case 1534:
case 3496:
case 1820:
case 3411:
case 854:
case 340:
case 4005:
case 1305:
case 966:
case 2992:
case 3604:
case 114:
case 3786:
case 1951:
case 1981:
case 3756:
case 2695:
case 391:
case 179:
case 3828:
case 1818:
case 2070:
case 3199:
case 3771:
case 3757:
case 1067:
case 145:
case 3273:
case 3385:
case 2509:
case 3443:
case 3037:
case 1235:
case 422:
case 372:
case 2402:
case 3417:
case 2615:
case 1103:
case 412:
case 3906:
case 1640:
case 1701:
case 27:
case 3219:
case 1203:
case 1971:
case 1306:
case 3755:
case 4006:
case 555:
case 3371:
case 3357:
case 558:
case 3167:
case 3864:
case 980:
case 2914:
case 780:
case 3376:
case 2188:
case 1520:
case 1137:
case 1985:
case 3003:
case 3510:
case 1301:
case 2042:
case 131:
case 1425:
case 2288:
case 3035:
case 443:
case 401:
case 2368:
case 2724:
case 2946:
case 2015:
case 797:
case 770:
case 2435:
case 2989:
case 1507:
case 3549:
case 874:
case 2522:
case 1040:
case 3556:
case 2127:
case 3586:
case 2670:
case 3934:
case 218:
case 3272:
case 684:
case 970:
case 3577:
case 3328:
case 3764:
case 537:
case 1054:
case 1084:
case 225:
case 1928:
case 2239:
case 3629:
case 1505:
case 834:
case 382:
case 1400:
case 461:
case 730:
case 2139:
case 2437:
case 3140:
case 3002:
case 1458:
case 1488:
case 28:
case 3254:
case 1673:
case 276:
case 3728:
case 930:
case 577:
case 3563:
case 3364:
case 3154:
case 3470:
case 3857:
case 357:
case 1869:
case 2773:
case 1464:
case 2799:
case 2367:
case 2929:
case 653:
case 1238:
case 3942:
case 2257:
case 2884:
case 3094:
case 4070:
case 2459:
case 2935:
case 1516:
case 2187:
case 2446:
case 2157:
case 1370:
case 486:
case 1815:
case 947:
case 47:
case 810:
case 2698:
case 1024:
case 714:
case 667:
case 3839:
case 3521:
case 1511:
case 820:
case 222:
case 3268:
case 363:
case 3014:
case 3689:
case 3659:
case 1770:
case 1958:
case 385:
case 807:
case 388:
case 209:
case 3646:
case 2155:
case 2365:
case 3418:
case 3038:
case 2767:
case 2399:
case 1897:
case 3788:
case 4042:
case 3124:
case 2319:
case 43:
case 1114:
case 10:
case 1843:
case 751:
case 3339:
case 3401:
case 1315:
case 3614:
case 142:
case 1743:
case 607:
case 564:
case 1624:
case 4015:
case 341:
case 3325:
case 375:
case 428:
case 1487:
case 2583:
case 106:
case 2384:
case 1870:
case 3406:
case 759:
case 4095:
case 2772:
case 415:
case 1369:
case 4069:
case 1927:
case 2164:
case 1395:
case 3969:
case 4043:
case 1544:
case 552:
case 261:
case 2034:
case 3578:
case 3327:
case 1715:
case 3995:
case 2601:
case 2740:
case 113:
case 2566:
case 853:
case 1795:
case 3046:
case 867:
case 2865:
case 269:
case 2494:
case 1769:
case 1397:
case 2372:
case 493:
case 2228:
case 1455:
case 1939:
case 3638:
case 476:
case 2784:
case 2754:
case 335:
case 2606:
case 1419:
case 3530:
case 2586:
case 1143:
case 1814:
case 1512:
case 2442:
case 3824:
case 3403:
case 1039:
case 1117:
case 1025:
case 3227:
case 1:
case 1688:
case 1243:
case 1217:
case 3946:
case 1741:
case 133:
case 2172:
case 1894:
case 336:
case 2764:
case 2581:
case 2577:
case 2885:
case 2855:
case 3941:
case 315:
case 1297:
case 3069:
case 3225:
case 2002:
case 173:
case 2140:
case 3437:
case 3017:
case 2876:
case 880:
case 282:
case 196:
case 2629:
case 2603:
case 1115:
case 3239:
case 4046:
case 1295:
case 2871:
case 697:
case 3097:
case 2857:
case 1346:
case 2154:
case 4059:
case 393:
case 2563:
case 108:
case 2728:
case 105:
case 376:
case 426:
case 984:
case 2575:
case 457:
case 2901:
case 2757:
case 2787:
case 2771:
case 2199:
case 4094:
case 2165:
case 1472:
case 291:
case 1593:
case 386:
case 1394:
case 3938:
case 1000:
case 2417:
case 1314:
case 897:
case 1142:
case 272:
case 1058:
case 870:
case 1088:
case 3509:
case 2443:
case 1547:
case 1270:
case 1794:
case 2864:
case 485:
case 1924:
case 2167:
case 2357:
case 2371:
case 2755:
case 4038:
case 1846:
case 2785:
case 3724:
case 3200:
case 3368:
case 3617:
case 2035:
case 1627:
case 3258:
case 3994:
case 2602:
case 3042:
case 2510:
case 33:
case 2003:
case 1440:
case 2376:
case 814:
case 241:
case 1234:
case 2727:
case 720:
case 2614:
case 3340:
case 1837:
case 2401:
case 2339:
case 2858:
case 500:
case 2888:
case 3098:
case 3902:
case 2943:
case 3867:
case 249:
case 3018:
case 1685:
case 3553:
case 3354:
case 1028:
case 278:
case 907:
case 55:
case 1984:
case 3566:
case 1298:
case 3740:
case 482:
case 3601:
case 1803:
case 3034:
case 361:
case 2725:
case 4002:
case 3819:
case 1218:
case 235:
case 651:
case 3754:
case 226:
case 3228:
case 1657:
case 3873:
case 2059:
case 2089:
case 1118:
case 517:
case 3128:
case 1536:
case 216:
case 2915:
case 2046:
case 3157:
case 491:
case 129:
case 3187:
case 2526:
case 3489:
case 1106:
case 3459:
case 3884:
case 3552:
case 2094:
case 3765:
case 3257:
case 3287:
case 2942:
case 119:
case 3929:
case 1055:
case 3799:
case 3367:
case 556:
case 3618:
case 257:
case 21:
case 4037:
case 2300:
case 472:
case 3840:
case 2388:
case 3176:
case 3441:
case 2358:
case 1337:
case 312:
case 1201:
case 1999:
case 2825:
case 22:
case 2168:
case 1729:
case 3276:
case 1071:
case 1087:
case 1057:
case 3872:
case 3255:
case 1548:
case 3285:
case 3574:
case 2418:
case 3006:
case 1664:
case 2646:
case 288:
case 309:
case 767:
case 2659:
case 3001:
case 1504:
case 2498:
case 1303:
case 1329:
case 3319:
case 2124:
case 753:
case 4029:
case 967:
case 2970:
case 102:
case 1335:
case 2224:
case 647:
case 2641:
case 2700:
case 1051:
case 671:
case 1081:
case 1077:
case 3852:
case 3275:
case 1966:
case 3584:
case 3353:
case 3882:
case 3761:
case 2826:
case 3263:
case 3175:
case 889:
case 768:
case 287:
case 765:
case 2944:
case 3163:
case 2060:
case 2679:
case 3931:
case 2693:
case 692:
case 57:
case 1205:
case 1961:
case 1133:
case 2420:
case 679:
case 3540:
case 965:
case 134:
case 2950:
case 2613:
case 3936:
case 1233:
case 881:
case 2908:
case 404:
case 2647:
case 648:
case 2525:
case 394:
case 1662:
case 3572:
case 79:
case 4036:
case 3277:
case 3281:
case 3251:
case 1075:
case 983:
case 3783:
case 631:
case 4031:
case 2122:
case 3413:
case 1107:
case 3149:
case 3447:
case 2645:
case 1423:
case 3033:
case 2527:
case 3186:
case 174:
case 1331:
case 1804:
case 1502:
case 3632:
case 639:
case 3005:
case 3366:
case 2222:
case 99:
case 53:
case 2230:
case 908:
case 1220:
case 1704:
case 1974:
case 3948:
case 773:
case 3210:
case 1649:
case 1232:
case 831:
case 2405:
case 1537:
case 1120:
case 796:
case 2588:
case 2321:
case 1132:
case 2500:
case 2013:
case 1748:
case 3567:
case 996:
case 1651:
case 528:
case 2079:
case 3853:
case 3190:
case 973:
case 2660:
case 515:
case 705:
case 518:
case 1982:
case 2209:
case 3866:
case 2223:
case 689:
case 1535:
case 452:
case 2991:
case 3633:
case 2721:
case 58:
case 3412:
case 871:
case 2109:
case 1430:
case 3020:
case 1010:
case 3605:
case 2878:
case 7:
case 3460:
case 593:
case 2726:
case 9:
case 681:
case 1062:
case 2996:
case 3861:
case 3782:
case 845:
case 933:
case 892:
case 1663:
case 290:
case 3565:
case 1090:
case 1836:
case 3573:
case 576:
case 3599:
case 1348:
case 277:
case 3492:
case 879:
case 1250:
case 1280:
case 4060:
case 1360:
case 2933:
case 3616:
case 650:
case 1208:
case 487:
case 3691:
case 2161:
case 1474:
case 2377:
case 2381:
case 3448:
case 2763:
case 1150:
case 1392:
case 1893:
case 356:
case 2905:
case 2775:
case 4092:
case 2261:
case 1108:
case 153:
case 2166:
case 204:
case 3278:
case 813:
case 946:
case 2349:
case 3823:
case 1847:
case 3322:
case 3809:
case 1813:
case 1144:
case 2356:
case 360:
case 2907:
case 2375:
case 2283:
case 2253:
case 1792:
case 3912:
case 729:
case 60:
case 2036:
case 2183:
case 3080:
case 2890:
case 2153:
case 3050:
case 1546:
case 3008:
case 719:
case 921:
case 806:
case 1589:
case 2786:
case 3730:
case 721:
case 1712:
case 842:
case 3722:
case 240:
case 2749:
case 895:
case 898:
case 3960:
case 543:
case 3044:
case 2810:
case 3309:
case 4013:
case 3323:
case 3524:
case 3431:
case 2886:
case 3830:
case 4047:
case 1514:
case 300:
case 1466:
case 2408:
case 1892:
case 695:
case 2881:
case 2877:
case 2450:
case 1026:
case 2480:
case 4093:
case 2174:
case 107:
case 2920:
case 642:
case 2585:
case 2790:
case 2932:
case 754:
case 35:
case 1111:
case 1196:
case 3993:
case 3979:
case 2631:
case 3644:
case 110:
case 1211:
case 561:
case 4045:
case 850:
case 1296:
case 3709:
case 3723:
case 327:
case 1191:
case 477:
case 2390:
case 2048:
case 1483:
case 2571:
case 2587:
case 94:
case 1453:
case 2282:
case 2252:
case 1216:
case 3608:
case 2863:
case 3680:
case 66:
case 954:
case 1403:
case 498:
case 3039:
case 3117:
case 1522:
case 584:
case 3814:
case 2102:
case 2964:
case 2040:
case 1946:
case 3600:
case 3741:
case 333:
case 3217:
case 2734:
case 1227:
case 3:
case 3658:
case 637:
case 2202:
case 3025:
case 442:
case 3894:
case 136:
case 2084:
case 2054:
case 3465:
case 2667:
case 3197:
case 1670:
case 1069:
case 115:
case 118:
case 3746:
case 1139:
case 2400:
case 690:
case 1225:
case 423:
case 18:
case 2458:
case 281:
case 2505:
case 396:
case 3115:
case 1125:
case 2619:
case 3346:
case 3269:
case 3389:
case 3169:
case 2699:
case 308:
case 2665:
case 887:
case 3738:
case 794:
case 248:
case 2067:
case 2684:
case 2654:
case 2706:
case 1695:
case 3579:
case 186:
case 3394:
case 3472:
case 1070:
case 2701:
case 2203:
case 2957:
case 2987:
case 3242:
case 2427:
case 1324:
case 534:
case 1509:
case 3547:
case 3058:
case 2235:
case 4024:
case 1615:
case 2103:
case 994:
case 837:
case 239:
case 3270:
case 3794:
case 368:
case 2306:
case 3859:
case 3889:
case 3484:
case 3714:
case 2237:
case 1643:
case 1258:
case 3545:
case 231:
case 574:
case 1200:
case 1368:
case 3440:
case 2019:
case 3841:
case 2439:
case 2834:
case 242:
case 3702:
case 354:
case 2315:
case 917:
case 3234:
case 2624:
case 2241:
case 4040:
case 34:
case 3837:
case 2476:
case 2141:
case 295:
case 927:
case 2246:
case 1772:
case 1867:
case 727:
case 2369:
case 2259:
case 2395:
case 507:
case 2457:
case 1354:
case 1583:
case 2471:
case 206:
case 1018:
case 3298:
case 520:
case 26:
case 3984:
case 804:
case 3676:
case 2668:
case 362:
case 1034:
case 161:
case 3424:
case 2343:
case 2544:
case 2715:
case 3531:
case 3803:
case 2455:
case 1228:
case 652:
case 1561:
case 900:
case 3064:
case 3536:
case 2550:
case 2795:
case 1865:
case 1128:
case 2508:
case 1873:
case 1552:
case 1489:
case 2516:
case 3106:
case 492:
case 1935:
case 479:
case 1157:
case 1187:
case 1171:
case 2370:
case 2138:
case 2869:
case 2464:
case 1799:
case 1367:
case 1903:
case 4067:
case 2895:
case 448:
case 3085:
case 266:
case 1929:
case 445:
case 3628:
case 1257:
case 1287:
case 567:
case 319:
case 553:
case 2024:
case 471:
case 1176:
case 321:
case 122:
case 2596:
case 1840:
case 1276:
case 2742:
case 852:
case 2815:
case 3703:
case 1719:
case 3999:
case 3973:
case 112:
case 1006:
case 1365:
case 2194:
case 1767:
case 1255:
case 1872:
case 3548:
case 1285:
case 2897:
case 3071:
case 3087:
case 3057:
case 2770:
case 756:
case 2294:
case 1937:
case 640:
case 2988:
case 109:
case 1155:
case 2817:
case 3076:
case 3967:
case 3504:
case 20:
case 956:
case 3802:
case 2114:
case 3329:
case 2843:
case 1001:
case 2342:
case 101:
case 760:
case 431:
case 143:
case 672:
case 2490:
case 4083:
case 2891:
case 3736:
case 1175:
case 3056:
case 1766:
case 583:
case 1007:
case 3049:
case 1445:
case 2623:
case 2744:
case 882:
case 2515:
case 1572:
case 1493:
case 1479:
case 3662:
case 1177:
case 1181:
case 194:
case 3336:
case 2380:
case 3690:
case 97:
case 1753:
case 2292:
case 4061:
case 786:
case 3075:
case 1277:
case 3331:
case 3804:
case 424:
case 986:
case 2543:
case 1447:
case 2344:
case 3409:
case 1186:
case 1413:
case 1149:
case 4066:
case 2212:
case 414:
case 1620:
case 3983:
case 3953:
case 1249:
case 3649:
case 1607:
case 3232:
case 78:
case 3974:
case 2622:
case 3686:
case 832:
case 3656:
case 993:
case 1110:
case 5:
case 3132:
case 2245:
case 3537:
case 3120:
case 2023:
case 533:
case 2009:
case 3651:
case 3677:
case 1162:
case 1774:
case 2463:
case 1567:
case 4082:
case 98:
case 1382:
case 1190:
case 2213:
case 573:
case 915:
case 2711:
case 918:
case 2796:
case 2247:
case 3982:
case 3952:
case 872:
case 2542:
case 1032:
case 3422:
case 270:
case 3010:
case 2113:
case 936:
case 3529:
case 1605:
case 2456:
case 596:
case 1412:
case 925:
case 928:
case 1752:
case 725:
case 2716:
case 728:
case 459:
case 1460:
case 2279:
case 891:
case 2808:
case 505:
case 2477:
case 3675:
case 1599:
case 3836:
case 2850:
case 826:
case 2682:
case 3360:
case 901:
case 529:
case 1691:
case 943:
case 3108:
case 2518:
case 2053:
case 3392:
case 663:
case 3180:
case 3893:
case 3474:
case 3244:
case 1278:
case 657:
case 909:
case 2733:
case 1696:
case 1611:
case 521:
case 3144:
case 743:
case 1330:
case 2131:
case 4022:
case 3813:
case 2975:
case 1809:
case 2598:
case 2956:
case 3922:
case 2949:
case 922:
case 1080:
case 803:
case 1992:
case 2977:
case 1730:
case 2333:
case 1044:
case 2820:
case 3313:
case 1830:
case 1096:
case 969:
case 2962:
case 678:
case 2807:
case 1309:
case 2478:
case 1323:
case 3466:
case 761:
case 649:
case 2148:
case 3026:
case 961:
case 1016:
case 3594:
case 3379:
case 641:
case 769:
case 307:
case 3111:
case 2501:
case 2833:
case 3196:
case 15:
case 2666:
case 2320:
case 863:
case 470:
case 1121:
case 3747:
case 626:
case 1709:
case 1568:
case 1723:
case 3296:
case 310:
case 1221:
case 2805:
case 82:
case 3453:
case 2074:
case 127:
case 3191:
case 3116:
case 1680:
case 3793:
case 3779:
case 1650:
case 1226:
case 857:
case 3216:
case 1608:
case 1947:
case 3923:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759982402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,];
var gg_b = "1759982402/";

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
