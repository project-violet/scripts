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
case 966:
case 3638:
case 3428:
case 597:
case 2758:
case 2598:
case 1786:
case 1960:
case 1891:
case 3004:
case 419:
case 1017:
case 367:
case 4040:
case 1905:
case 2472:
case 471:
case 1496:
case 3998:
case 707:
case 2024:
case 695:
case 1525:
case 384:
case 345:
case 135:
case 3477:
case 1190:
case 3383:
case 1476:
case 2907:
case 516:
case 1540:
case 324:
case 3376:
case 643:
case 3522:
case 542:
case 4006:
case 1659:
case 1154:
case 2527:
case 4053:
case 2375:
case 1411:
case 1181:
case 393:
case 3311:
case 1170:
case 3902:
case 1656:
case 812:
case 1514:
case 46:
case 846:
case 4025:
case 1816:
case 454:
case 3507:
case 3787:
case 2578:
case 599:
case 253:
case 417:
case 1735:
case 3927:
case 1603:
case 2015:
case 2688:
case 3080:
case 2421:
case 3504:
case 2829:
case 1006:
case 2161:
case 3806:
case 3751:
case 1517:
case 3853:
case 3443:
case 2098:
case 308:
case 154:
case 2745:
case 1762:
case 932:
case 714:
case 2826:
case 757:
case 1009:
case 1394:
case 3746:
case 3809:
case 1157:
case 1912:
case 117:
case 1301:
case 833:
case 3209:
case 3915:
case 2766:
case 2971:
case 3156:
case 2980:
case 2226:
case 1822:
case 4017:
case 1040:
case 2318:
case 3840:
case 1350:
case 3103:
case 2916:
case 119:
case 636:
case 3571:
case 128:
case 171:
case 2463:
case 2919:
case 3516:
case 3159:
case 3141:
case 3814:
case 2734:
case 296:
case 3878:
case 2014:
case 2807:
case 1229:
case 103:
case 4024:
case 3363:
case 67:
case 1720:
case 2374:
case 3188:
case 3742:
case 2350:
case 732:
case 1260:
case 1916:
case 1971:
case 957:
case 2747:
case 1766:
case 1226:
case 3827:
case 4015:
case 3767:
case 2912:
case 848:
case 217:
case 2025:
case 2138:
case 3917:
case 1745:
case 975:
case 1860:
case 26:
case 3060:
case 2668:
case 1530:
case 323:
case 661:
case 2343:
case 3898:
case 1098:
case 3005:
case 685:
case 1631:
case 3321:
case 2006:
case 1161:
case 3278:
case 855:
case 2517:
case 486:
case 3029:
case 394:
case 153:
case 2479:
case 3230:
case 1212:
case 931:
case 1148:
case 2871:
case 1502:
case 3815:
case 2735:
case 1015:
case 2603:
case 2204:
case 2656:
case 2291:
case 907:
case 3764:
case 1527:
case 3224:
case 2397:
case 3739:
case 1375:
case 2819:
case 2181:
case 2170:
case 2540:
case 2476:
case 306:
case 3914:
case 4078:
case 2525:
case 2929:
case 2377:
case 3308:
case 3906:
case 235:
case 126:
case 3560:
case 2496:
case 3131:
case 198:
case 3953:
case 79:
case 2216:
case 2506:
case 2786:
case 834:
case 2017:
case 1652:
case 3012:
case 50:
case 2710:
case 1812:
case 3830:
case 4027:
case 2271:
case 3785:
case 3909:
case 1758:
case 2063:
case 700:
case 1975:
case 2997:
case 262:
case 243:
case 1243:
case 1933:
case 1149:
case 1151:
case 1307:
case 1689:
case 461:
case 1414:
case 2167:
case 3757:
case 2637:
case 3050:
case 922:
case 1322:
case 1693:
case 1610:
case 360:
case 3074:
case 3340:
case 3162:
case 2592:
case 1850:
case 2218:
case 2508:
case 1165:
case 2142:
case 894:
case 1703:
case 379:
case 2360:
case 1250:
case 1635:
case 982:
case 3325:
case 2682:
case 3001:
case 1894:
case 1673:
case 410:
case 3094:
case 2572:
case 1409:
case 1756:
case 2329:
case 698:
case 4076:
case 295:
case 3908:
case 2977:
case 2498:
case 1100:
case 138:
case 2305:
case 672:
case 1843:
case 73:
case 3043:
case 3528:
case 3186:
case 2950:
case 1918:
case 2415:
case 2563:
case 3110:
case 3193:
case 1371:
case 17:
case 2185:
case 1079:
case 2645:
case 778:
case 502:
case 603:
case 3876:
case 3283:
case 236:
case 125:
case 3550:
case 3574:
case 3651:
case 3097:
case 3649:
case 438:
case 1897:
case 3811:
case 3963:
case 3296:
case 2731:
case 1297:
case 3781:
case 3770:
case 2164:
case 747:
case 305:
case 3921:
case 2008:
case 161:
case 3077:
case 334:
case 3276:
case 3883:
case 2233:
case 185:
case 781:
case 2312:
case 3028:
case 765:
case 3543:
case 3317:
case 3491:
case 1647:
case 1304:
case 1099:
case 3404:
case 1136:
case 2391:
case 1666:
case 2647:
case 1521:
case 2828:
case 654:
case 1901:
case 3182:
case 1620:
case 3412:
case 66:
case 867:
case 2083:
case 3095:
case 688:
case 1008:
case 515:
case 1895:
case 949:
case 1233:
case 3292:
case 244:
case 2297:
case 870:
case 1139:
case 462:
case 443:
case 1634:
case 81:
case 3872:
case 2096:
case 4063:
case 2011:
case 3075:
case 696:
case 947:
case 1875:
case 3208:
case 4021:
case 495:
case 3518:
case 1295:
case 3892:
case 136:
case 1833:
case 9:
case 2380:
case 1415:
case 981:
case 210:
case 1185:
case 3315:
case 2768:
case 27:
case 893:
case 965:
case 2228:
case 2662:
case 619:
case 2079:
case 1974:
case 3667:
case 2918:
case 3137:
case 604:
case 3996:
case 3398:
case 2453:
case 900:
case 4092:
case 3429:
case 3821:
case 1977:
case 2759:
case 2406:
case 2599:
case 791:
case 808:
case 2673:
case 3636:
case 2894:
case 2409:
case 2756:
case 3166:
case 1572:
case 3755:
case 1218:
case 3460:
case 1360:
case 722:
case 2250:
case 2635:
case 3120:
case 3685:
case 2874:
case 3018:
case 2693:
case 539:
case 3533:
case 2440:
case 3145:
case 3575:
case 2511:
case 2686:
case 2294:
case 1478:
case 2149:
case 3761:
case 2644:
case 2307:
case 4008:
case 2689:
case 3221:
case 2414:
case 1063:
case 3302:
case 333:
case 2579:
case 2243:
case 1447:
case 3109:
case 1857:
case 3256:
case 3347:
case 307:
case 3691:
case 2052:
case 906:
case 3125:
case 3774:
case 784:
case 745:
case 1365:
case 2255:
case 3750:
case 3465:
case 129:
case 71:
case 758:
case 3153:
case 1300:
case 118:
case 331:
case 1568:
case 2105:
case 3400:
case 15:
case 2913:
case 3106:
case 2129:
case 1059:
case 3619:
case 2721:
case 1349:
case 3451:
case 3859:
case 1107:
case 2970:
case 2981:
case 3743:
case 503:
case 602:
case 1238:
case 1462:
case 2855:
case 189:
case 3362:
case 2615:
case 1003:
case 3680:
case 724:
case 793:
case 4068:
case 1056:
case 3794:
case 3554:
case 1257:
case 3856:
case 3581:
case 314:
case 3538:
case 1890:
case 1961:
case 1776:
case 3090:
case 4041:
case 572:
case 2031:
case 1254:
case 3797:
case 2339:
case 1609:
case 3952:
case 489:
case 1473:
case 876:
case 2248:
case 3335:
case 427:
case 891:
case 2482:
case 2957:
case 10:
case 3728:
case 1640:
case 3393:
case 1171:
case 1410:
case 652:
case 1493:
case 3432:
case 487:
case 32:
case 1116:
case 2627:
case 3386:
case 299:
case 1955:
case 1559:
case 3988:
case 882:
case 418:
case 3389:
case 1614:
case 1556:
case 1870:
case 1881:
case 45:
case 3607:
case 3081:
case 1923:
case 464:
case 1444:
case 1854:
case 263:
case 242:
case 586:
case 3777:
case 375:
case 1213:
case 1290:
case 216:
case 332:
case 756:
case 1602:
case 3795:
case 3941:
case 3959:
case 1588:
case 2783:
case 2213:
case 1772:
case 2881:
case 2796:
case 3231:
case 2614:
case 2556:
case 1678:
case 2923:
case 2444:
case 800:
case 2116:
case 1627:
case 2799:
case 2559:
case 2541:
case 4052:
case 783:
case 908:
case 1848:
case 2171:
case 1458:
case 3485:
case 1385:
case 2493:
case 2625:
case 2435:
case 1248:
case 197:
case 3130:
case 3382:
case 1482:
case 1957:
case 2779:
case 3660:
case 20:
case 637:
case 4088:
case 3561:
case 2191:
case 2473:
case 1938:
case 3626:
case 3436:
case 2387:
case 2254:
case 3124:
case 3629:
case 2711:
case 83:
case 535:
case 601:
case 2776:
case 1552:
case 1792:
case 2961:
case 2813:
case 3605:
case 1698:
case 2653:
case 821:
case 2257:
case 519:
case 2462:
case 984:
case 1445:
case 945:
case 3252:
case 289:
case 2122:
case 1615:
case 2003:
case 680:
case 3548:
case 313:
case 571:
case 366:
case 1954:
case 967:
case 2351:
case 2349:
case 849:
case 3178:
case 1913:
case 1434:
case 463:
case 969:
case 1223:
case 218:
case 25:
case 241:
case 1630:
case 651:
case 1420:
case 620:
case 3718:
case 1255:
case 1342:
case 924:
case 3288:
case 3852:
case 881:
case 517:
case 2447:
case 39:
case 993:
case 1126:
case 865:
case 2239:
case 3470:
case 3111:
case 1381:
case 1044:
case 3454:
case 2264:
case 1089:
case 2663:
case 760:
case 2949:
case 2951:
case 2058:
case 4047:
case 3032:
case 1010:
case 3810:
case 3893:
case 1832:
case 3674:
case 2885:
case 3235:
case 2236:
case 3791:
case 3551:
case 3273:
case 3549:
case 1717:
case 832:
case 1086:
case 3601:
case 1073:
case 439:
case 1887:
case 2965:
case 3966:
case 3210:
case 151:
case 3500:
case 3780:
case 14:
case 33:
case 3835:
case 1128:
case 711:
case 3490:
case 3413:
case 3969:
case 1390:
case 755:
case 2520:
case 3934:
case 3244:
case 2621:
case 3289:
case 3719:
case 3196:
case 2566:
case 2355:
case 349:
case 2118:
case 252:
case 1679:
case 4073:
case 1174:
case 4035:
case 1544:
case 699:
case 3046:
case 1589:
case 1456:
case 420:
case 44:
case 2932:
case 3051:
case 1441:
case 1706:
case 3359:
case 3341:
case 3084:
case 1753:
case 1593:
case 642:
case 3532:
case 663:
case 350:
case 1200:
case 378:
case 562:
case 2558:
case 616:
case 1676:
case 2692:
case 2608:
case 4089:
case 101:
case 381:
case 273:
case 2702:
case 1143:
case 474:
case 1251:
case 1249:
case 2778:
case 3587:
case 1696:
case 2069:
case 1357:
case 480:
case 3982:
case 137:
case 3457:
case 1101:
case 1699:
case 2066:
case 1194:
case 2727:
case 4093:
case 4010:
case 912:
case 3:
case 3722:
case 734:
case 697:
case 1740:
case 1338:
case 946:
case 3628:
case 3438:
case 4037:
case 3042:
case 2740:
case 1842:
case 1452:
case 2865:
case 2936:
case 3245:
case 1020:
case 3539:
case 831:
case 3935:
case 2101:
case 4058:
case 2194:
case 1727:
case 2249:
case 2251:
case 1034:
case 3869:
case 402:
case 3834:
case 1069:
case 2964:
case 807:
case 1608:
case 3695:
case 1702:
case 1582:
case 2800:
case 173:
case 2143:
case 2200:
case 3163:
case 2593:
case 2510:
case 1798:
case 3705:
case 3423:
case 3633:
case 1323:
case 3944:
case 3234:
case 2611:
case 3729:
case 2884:
case 3675:
case 2706:
case 2849:
case 2851:
case 3269:
case 2544:
case 4082:
case 3067:
case 2985:
case 2589:
case 2709:
case 2456:
case 3993:
case 1932:
case 3910:
case 190:
case 2403:
case 1355:
case 239:
case 1045:
case 630:
case 2725:
case 746:
case 1864:
case 1839:
case 3172:
case 1566:
case 585:
case 2177:
case 3542:
case 3108:
case 322:
case 1520:
case 641:
case 561:
case 960:
case 3882:
case 24:
case 629:
case 2035:
case 452:
case 687:
case 3036:
case 2073:
case 2887:
case 3237:
case 3962:
case 1236:
case 2717:
case 3837:
case 2086:
case 2093:
case 2010:
case 1348:
case 1730:
case 2832:
case 3858:
case 2967:
case 1885:
case 382:
case 1663:
case 525:
case 274:
case 1951:
case 955:
case 1545:
case 4034:
case 3192:
case 1949:
case 1133:
case 1239:
case 473:
case 840:
case 2044:
case 2354:
case 1264:
case 1137:
case 3950:
case 2646:
case 3974:
case 500:
case 2471:
case 3415:
case 3563:
case 2574:
case 1033:
case 112:
case 2713:
case 1518:
case 146:
case 937:
case 1272:
case 2684:
case 2296:
case 2963:
case 3731:
case 2189:
case 2651:
case 1075:
case 2649:
case 2144:
case 2594:
case 2754:
case 3072:
case 2770:
case 1872:
case 2781:
case 3424:
case 433:
case 1324:
case 2883:
case 1292:
case 234:
case 1808:
case 3008:
case 2600:
case 1095:
case 205:
case 2921:
case 2135:
case 2543:
case 2279:
case 1182:
case 3312:
case 1748:
case 53:
case 3901:
case 773:
case 3994:
case 3521:
case 804:
case 2404:
case 835:
case 3136:
case 521:
case 3402:
case 3997:
case 362:
case 1911:
case 951:
case 1221:
case 2314:
case 1378:
case 1761:
case 2407:
case 2992:
case 3478:
case 3637:
case 2162:
case 3592:
case 2738:
case 2074:
case 2340:
case 260:
case 1685:
case 670:
case 658:
case 3682:
case 61:
case 255:
case 279:
case 1595:
case 1460:
case 3218:
case 3142:
case 3508:
case 667:
case 547:
case 2309:
case 888:
case 2094:
case 1636:
case 3928:
case 1426:
case 3326:
case 2687:
case 395:
case 1664:
case 1983:
case 3021:
case 2306:
case 854:
case 1821:
case 1134:
case 4033:
case 3329:
case 645:
case 684:
case 565:
case 3305:
case 248:
case 1398:
case 1263:
case 1996:
case 2353:
case 980:
case 1405:
case 74:
case 2723:
case 1528:
case 1043:
case 1972:
case 111:
case 338:
case 2996:
case 2263:
case 1353:
case 3741:
case 1908:
case 3406:
case 2429:
case 2639:
case 3409:
case 1147:
case 3801:
case 3673:
case 2636:
case 3894:
case 1687:
case 3274:
case 3635:
case 715:
case 2120:
case 155:
case 3583:
case 2533:
case 2018:
case 2685:
case 3686:
case 803:
case 4028:
case 177:
case 3146:
case 1757:
case 2979:
case 2221:
case 3184:
case 1314:
case 405:
case 3307:
case 2378:
case 3151:
case 2761:
case 3149:
case 1407:
case 3243:
case 606:
case 3975:
case 2302:
case 233:
case 3304:
case 872:
case 3647:
case 3187:
case 1317:
case 3391:
case 898:
case 1028:
case 1135:
case 2330:
case 2182:
case 2642:
case 2292:
case 1883:
case 1276:
case 2808:
case 3877:
case 134:
case 2095:
case 1077:
case 361:
case 105:
case 1594:
case 694:
case 737:
case 1896:
case 990:
case 2324:
case 1811:
case 448:
case 1419:
case 853:
case 3319:
case 1649:
case 1097:
case 2075:
case 4043:
case 3011:
case 212:
case 1550:
case 2892:
case 1790:
case 1876:
case 2208:
case 246:
case 2518:
case 3228:
case 3662:
case 656:
case 3768:
case 1480:
case 2158:
case 1471:
case 3371:
case 4094:
case 1110:
case 310:
case 973:
case 2137:
case 1299:
case 2667:
case 1646:
case 1029:
case 1278:
case 2749:
case 2806:
case 2751:
case 1321:
case 3829:
case 2784:
case 208:
case 1005:
case 1898:
case 2924:
case 531:
case 1202:
case 930:
case 2443:
case 123:
case 1060:
case 2240:
case 1026:
case 2401:
case 1767:
case 2809:
case 507:
case 1827:
case 3226:
case 3766:
case 3980:
case 2156:
case 3027:
case 2915:
case 1418:
case 156:
case 3260:
case 2022:
case 3155:
case 763:
case 2840:
case 1742:
case 1188:
case 2765:
case 509:
case 1648:
case 3720:
case 3463:
case 1298:
case 3515:
case 3919:
case 2700:
case 2580:
case 2571:
case 2253:
case 1363:
case 303:
case 3002:
case 799:
case 2681:
case 2141:
case 2206:
case 1215:
case 1909:
case 2168:
case 270:
case 58:
case 2732:
case 3652:
case 655:
case 679:
case 861:
case 2091:
case 267:
case 456:
case 885:
case 844:
case 3024:
case 927:
case 1372:
case 3472:
case 2998:
case 483:
case 557:
case 326:
case 1495:
case 2477:
case 1308:
case 284:
case 3395:
case 568:
case 372:
case 648:
case 1914:
case 2522:
case 929:
case 559:
case 224:
case 1433:
case 1623:
case 293:
case 2311:
case 2497:
case 2902:
case 1475:
case 1739:
case 1224:
case 3527:
case 2019:
case 1764:
case 2507:
case 2787:
case 2217:
case 1736:
case 3922:
case 677:
case 4060:
case 3688:
case 2071:
case 964:
case 3015:
case 2379:
case 4026:
case 3782:
case 3502:
case 3148:
case 540:
case 3212:
case 1080:
case 1927:
case 3603:
case 169:
case 1379:
case 3735:
case 836:
case 2940:
case 3291:
case 2736:
case 3773:
case 1016:
case 3514:
case 2475:
case 3170:
case 193:
case 3181:
case 3411:
case 2739:
case 3819:
case 3397:
case 1019:
case 408:
case 2764:
case 727:
case 3641:
case 2914:
case 206:
case 124:
case 2433:
case 2623:
case 1978:
case 2906:
case 1383:
case 3113:
case 2495:
case 2560:
case 1477:
case 184:
case 145:
case 2308:
case 3483:
case 3929:
case 304:
case 2661:
case 2526:
case 3744:
case 2372:
case 2953:
case 1396:
case 1998:
case 3789:
case 3509:
case 3905:
case 167:
case 2529:
case 2925:
case 1817:
case 1399:
case 3960:
case 3216:
case 3499:
case 3786:
case 2785:
case 2505:
case 1168:
case 11:
case 2909:
case 3710:
case 2830:
case 3280:
case 170:
case 3926:
case 1638:
case 1428:
case 2012:
case 741:
case 1670:
case 1007:
case 1681:
case 1814:
case 1141:
case 1159:
case 484:
case 396:
case 445:
case 1654:
case 1206:
case 612:
case 513:
case 2298:
case 1253:
case 371:
case 2363:
case 1580:
case 1700:
case 2802:
case 566:
case 319:
case 1450:
case 2648:
case 3374:
case 3040:
case 1474:
case 3822:
case 2827:
case 843:
case 862:
case 3747:
case 1156:
case 458:
case 3301:
case 59:
case 1930:
case 3912:
case 3157:
case 4071:
case 3394:
case 2227:
case 469:
case 942:
case 4016:
case 36:
case 3668:
case 3222:
case 916:
case 354:
case 1240:
case 3025:
case 2917:
case 3138:
case 1613:
case 2005:
case 1690:
case 1924:
case 2898:
case 70:
case 493:
case 1853:
case 2202:
case 388:
case 294:
case 3207:
case 999:
case 1591:
case 424:
case 1751:
case 1749:
case 1806:
case 2321:
case 3006:
case 1214:
case 961:
case 4036:
case 640:
case 560:
case 736:
case 2303:
case 1845:
case 2862:
case 3355:
case 2937:
case 3118:
case 1388:
case 2247:
case 3932:
case 2356:
case 577:
case 1269:
case 3537:
case 2084:
case 2341:
case 476:
case 1675:
case 2051:
case 422:
case 3323:
case 4039:
case 659:
case 3692:
case 675:
case 3558:
case 1989:
case 827:
case 491:
case 2532:
case 278:
case 250:
case 1163:
case 97:
case 373:
case 668:
case 3702:
case 3582:
case 3608:
case 614:
case 265:
case 1121:
case 657:
case 482:
case 3069:
case 1834:
case 1869:
case 3778:
case 829:
case 1461:
case 2707:
case 2587:
case 1536:
case 3361:
case 3066:
case 2982:
case 3267:
case 818:
case 1973:
case 925:
case 1245:
case 2628:
case 2262:
case 3842:
case 1042:
case 68:
case 2722:
case 3264:
case 2844:
case 3175:
case 3724:
case 830:
case 2481:
case 1567:
case 3949:
case 2176:
case 3663:
case 3984:
case 2179:
case 1448:
case 1858:
case 2235:
case 1712:
case 3730:
case 2893:
case 2674:
case 1085:
case 762:
case 2650:
case 743:
case 2584:
case 2704:
case 3037:
case 2886:
case 3569:
case 3965:
case 3836:
case 2694:
case 1036:
case 2087:
case 3534:
case 2368:
case 3715:
case 2835:
case 2210:
case 2780:
case 631:
case 122:
case 534:
case 2183:
case 176:
case 2565:
case 1108:
case 2413:
case 3195:
case 3900:
case 2196:
case 1331:
case 3566:
case 1172:
case 3864:
case 1039:
case 2331:
case 2172:
case 1196:
case 478:
case 450:
case 1719:
case 1289:
case 897:
case 1244:
case 4051:
case 4049:
case 1934:
case 1643:
case 4084:
case 3313:
case 3390:
case 1183:
case 315:
case 1490:
case 1565:
case 2108:
case 1413:
case 4046:
case 738:
case 3128:
case 2258:
case 1368:
case 1835:
case 943:
case 13:
case 2947:
case 2882:
case 1780:
case 1293:
case 3468:
case 3887:
case 1199:
case 1873:
case 1716:
case 1694:
case 3073:
case 1601:
case 1087:
case 842:
case 863:
case 1584:
case 1704:
case 3287:
case 2837:
case 1886:
case 1273:
case 1551:
case 995:
case 1945:
case 2448:
case 1235:
case 1179:
case 380:
case 447:
case 1810:
case 2712:
case 3832:
case 1032:
case 1176:
case 546:
case 374:
case 613:
case 512:
case 282:
case 4000:
case 1844:
case 1454:
case 465:
case 3370:
case 3381:
case 1546:
case 1889:
case 3197:
case 2352:
case 3936:
case 1628:
case 1262:
case 936:
case 1438:
case 3338:
case 3865:
case 3740:
case 1065:
case 744:
case 1722:
case 1:
case 2564:
case 3699:
case 3101:
case 337:
case 1847:
case 1982:
case 2539:
case 3246:
case 2935:
case 3714:
case 2834:
case 3696:
case 1707:
case 2869:
case 3249:
case 3573:
case 3251:
case 3143:
case 1000:
case 3964:
case 165:
case 3683:
case 2944:
case 2423:
case 2633:
case 533:
case 2705:
case 178:
case 3593:
case 1532:
case 3753:
case 1084:
case 2269:
case 3459:
case 3706:
case 3586:
case 3851:
case 1049:
case 2234:
case 3884:
case 2729:
case 2993:
case 1247:
case 43:
case 3846:
case 3709:
case 3725:
case 2220:
case 2455:
case 2760:
case 1862:
case 2986:
case 3150:
case 2388:
case 149:
case 3265:
case 268:
case 681:
case 3698:
case 2013:
case 3552:
case 665:
case 545:
case 584:
case 214:
case 1831:
case 257:
case 1439:
case 1629:
case 2557:
case 413:
case 3339:
case 4023:
case 2797:
case 1124:
case 820:
case 1626:
case 1436:
case 2487:
case 1660:
case 2335:
case 570:
case 2868:
case 928:
case 397:
case 3248:
case 971:
case 2622:
case 2268:
case 2432:
case 1115:
case 1956:
case 3848:
case 3458:
case 2310:
case 1048:
case 1523:
case 1337:
case 3772:
case 2054:
case 593:
case 880:
case 2389:
case 259:
case 275:
case 524:
case 316:
case 3588:
case 3708:
case 2777:
case 954:
case 1941:
case 1795:
case 4061:
case 363:
case 96:
case 4048:
case 207:
case 3531:
case 2604:
case 2347:
case 1968:
case 3466:
case 2513:
case 2465:
case 772:
case 3160:
case 1288:
case 3255:
case 3342:
case 2125:
case 3630:
case 3420:
case 1612:
case 726:
case 3052:
case 837:
case 3763:
case 2931:
case 231:
case 508:
case 1061:
case 3624:
case 1369:
case 3469:
case 3913:
case 3861:
case 1178:
case 839:
case 2859:
case 2449:
case 3261:
case 2484:
case 2619:
case 2114:
case 3954:
case 1023:
case 2671:
case 1055:
case 904:
case 3615:
case 935:
case 2803:
case 1888:
case 2140:
case 3445:
case 3855:
case 2856:
case 2581:
case 2570:
case 3367:
case 1127:
case 2616:
case 2467:
case 1581:
case 1701:
case 327:
case 1570:
case 1446:
case 1856:
case 3948:
case 1554:
case 1794:
case 2127:
case 3056:
case 109:
case 3003:
case 1803:
case 1362:
case 2345:
case 3462:
case 2888:
case 266:
case 457:
case 682:
case 890:
case 2548:
case 2023:
case 213:
case 1449:
case 1451:
case 3349:
case 1619:
case 3041:
case 2061:
case 2334:
case 691:
case 1259:
case 475:
case 1106:
case 523:
case 1931:
case 3300:
case 4054:
case 4070:
case 676:
case 1513:
case 986:
case 1590:
case 2442:
case 3365:
case 3838:
case 704:
case 2612:
case 1125:
case 3617:
case 1604:
case 1347:
case 440:
case 2366:
case 1109:
case 3857:
case 873:
case 3783:
case 3213:
case 2941:
case 2959:
case 719:
case 3854:
case 1081:
case 3923:
case 3870:
case 3556:
case 3614:
case 4038:
case 2337:
case 3486:
case 3559:
case 1988:
case 3955:
case 802:
case 2903:
case 2115:
case 140:
case 1268:
case 1432:
case 1310:
case 330:
case 4057:
case 2523:
case 1868:
case 1117:
case 1487:
case 1952:
case 3191:
case 409:
case 3104:
case 2439:
case 2629:
case 3711:
case 2831:
case 1557:
case 2775:
case 3606:
case 2464:
case 717:
case 754:
case 168:
case 1090:
case 3776:
case 76:
case 3961:
case 3890:
case 1538:
case 114:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754470801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,];
var gg_b = "1754470801/";

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
