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
case 1562:
case 103:
case 2700:
case 3213:
case 3636:
case 665:
case 3285:
case 306:
case 2823:
case 3614:
case 1666:
case 3866:
case 4068:
case 989:
case 1887:
case 1650:
case 3850:
case 11:
case 154:
case 62:
case 2500:
case 2265:
case 2886:
case 3042:
case 2879:
case 1504:
case 3997:
case 2837:
case 2253:
case 312:
case 3775:
case 1211:
case 1158:
case 3761:
case 1315:
case 2605:
case 1819:
case 2945:
case 1555:
case 1383:
case 3727:
case 2437:
case 3212:
case 4044:
case 2099:
case 2486:
case 1563:
case 2271:
case 687:
case 3450:
case 2822:
case 910:
case 3533:
case 3008:
case 2333:
case 3178:
case 3527:
case 1487:
case 2252:
case 2781:
case 800:
case 2874:
case 1206:
case 3561:
case 2410:
case 2659:
case 3381:
case 2423:
case 3466:
case 1509:
case 1763:
case 3380:
case 3435:
case 1222:
case 2516:
case 2612:
case 3671:
case 1871:
case 2356:
case 3607:
case 1465:
case 3325:
case 1453:
case 1629:
case 3829:
case 2780:
case 3472:
case 2411:
case 3092:
case 3756:
case 516:
case 3560:
case 3205:
case 2270:
case 2360:
case 2734:
case 3424:
case 1584:
case 733:
case 2044:
case 3259:
case 502:
case 1040:
case 1517:
case 3873:
case 1673:
case 1364:
case 1274:
case 2806:
case 653:
case 1852:
case 192:
case 2406:
case 1776:
case 782:
case 1789:
case 1452:
case 918:
case 1197:
case 3088:
case 2214:
case 2685:
case 408:
case 2577:
case 495:
case 76:
case 3824:
case 1624:
case 1303:
case 2613:
case 2501:
case 3872:
case 4094:
case 3301:
case 621:
case 3267:
case 3377:
case 3429:
case 1589:
case 2739:
case 1237:
case 808:
case 2777:
case 1369:
case 1407:
case 1865:
case 3665:
case 1348:
case 2995:
case 2196:
case 895:
case 4048:
case 540:
case 931:
case 3004:
case 4069:
case 2952:
case 1542:
case 700:
case 373:
case 3846:
case 1646:
case 2082:
case 1394:
case 4003:
case 1159:
case 2971:
case 717:
case 2878:
case 1032:
case 519:
case 3062:
case 461:
case 3110:
case 2015:
case 4057:
case 3009:
case 535:
case 2478:
case 2098:
case 3741:
case 1399:
case 1061:
case 2166:
case 2965:
case 3618:
case 1027:
case 1508:
case 321:
case 1121:
case 3446:
case 3920:
case 3063:
case 571:
case 282:
case 1154:
case 2150:
case 3055:
case 26:
case 4002:
case 3186:
case 3985:
case 1986:
case 1979:
case 185:
case 46:
case 2124:
case 606:
case 1113:
case 55:
case 1056:
case 1792:
case 795:
case 3540:
case 1628:
case 825:
case 1120:
case 3954:
case 4026:
case 1445:
case 5:
case 2697:
case 1937:
case 2914:
case 1592:
case 2135:
case 32:
case 3030:
case 425:
case 309:
case 347:
case 2340:
case 4083:
case 3258:
case 963:
case 2057:
case 1910:
case 130:
case 93:
case 842:
case 3089:
case 3076:
case 167:
case 387:
case 3959:
case 1349:
case 4082:
case 1845:
case 3645:
case 588:
case 442:
case 3905:
case 145:
case 2391:
case 1593:
case 2738:
case 3247:
case 1922:
case 1588:
case 2048:
case 433:
case 521:
case 1243:
case 846:
case 1396:
case 83:
case 2148:
case 2488:
case 255:
case 2493:
case 933:
case 1208:
case 351:
case 3189:
case 3176:
case 1012:
case 3797:
case 43:
case 2103:
case 446:
case 1328:
case 1962:
case 2029:
case 3241:
case 1438:
case 2397:
case 275:
case 3849:
case 3638:
case 1838:
case 2492:
case 3345:
case 3868:
case 2164:
case 602:
case 2157:
case 1931:
case 3927:
case 319:
case 3130:
case 2035:
case 463:
case 553:
case 1020:
case 340:
case 744:
case 2888:
case 3933:
case 3444:
case 573:
case 718:
case 1085:
case 2051:
case 126:
case 3117:
case 2981:
case 2545:
case 3290:
case 504:
case 616:
case 2024:
case 4050:
case 3956:
case 4024:
case 3155:
case 1778:
case 388:
case 4051:
case 693:
case 3291:
case 2842:
case 3079:
case 1021:
case 3037:
case 1133:
case 1984:
case 1067:
case 2126:
case 3747:
case 3163:
case 1161:
case 4035:
case 2690:
case 961:
case 286:
case 1127:
case 3023:
case 3960:
case 2066:
case 587:
case 3547:
case 2916:
case 2183:
case 1694:
case 3894:
case 4072:
case 2934:
case 475:
case 37:
case 831:
case 3162:
case 2358:
case 3240:
case 547:
case 509:
case 855:
case 1059:
case 2843:
case 172:
case 749:
case 1989:
case 1175:
case 707:
case 710:
case 2641:
case 35:
case 4073:
case 565:
case 314:
case 2901:
case 348:
case 152:
case 3558:
case 2442:
case 3022:
case 3:
case 1191:
case 196:
case 2096:
case 1255:
case 2752:
case 2281:
case 2476:
case 289:
case 2507:
case 1834:
case 2149:
case 1263:
case 3864:
case 1664:
case 3233:
case 101:
case 3680:
case 3448:
case 3227:
case 418:
case 1942:
case 2552:
case 3802:
case 1602:
case 3371:
case 3469:
case 2656:
case 2028:
case 3625:
case 995:
case 3193:
case 1401:
case 2771:
case 1097:
case 3188:
case 3712:
case 2765:
case 1262:
case 1372:
case 1801:
case 4046:
case 2484:
case 1140:
case 1877:
case 3677:
case 484:
case 1425:
case 3353:
case 210:
case 1669:
case 3869:
case 2417:
case 3639:
case 1648:
case 512:
case 1335:
case 2753:
case 3464:
case 124:
case 506:
case 3713:
case 2200:
case 614:
case 3192:
case 2430:
case 2889:
case 3720:
case 2876:
case 249:
case 73:
case 2313:
case 1603:
case 2431:
case 2239:
case 3721:
case 2587:
case 671:
case 1510:
case 1047:
case 449:
case 3754:
case 3767:
case 2514:
case 1523:
case 3078:
case 1992:
case 2536:
case 2354:
case 2862:
case 2201:
case 680:
case 2409:
case 1710:
case 2199:
case 651:
case 3108:
case 2455:
case 2787:
case 2804:
case 1276:
case 1537:
case 1141:
case 1586:
case 2736:
case 1579:
case 284:
case 1723:
case 59:
case 2046:
case 755:
case 3882:
case 3759:
case 1522:
case 2216:
case 3826:
case 1626:
case 2770:
case 4028:
case 2855:
case 1230:
case 1881:
case 10:
case 889:
case 619:
case 218:
case 3260:
case 3815:
case 2462:
case 1683:
case 2194:
case 3559:
case 2225:
case 1722:
case 1698:
case 2938:
case 3256:
case 1190:
case 1217:
case 489:
case 113:
case 2661:
case 1574:
case 2831:
case 3991:
case 316:
case 1363:
case 1273:
case 1674:
case 3781:
case 2670:
case 197:
case 2043:
case 2733:
case 2381:
case 1355:
case 3423:
case 1859:
case 3437:
case 3945:
case 1229:
case 2727:
case 1805:
case 2761:
case 3327:
case 2008:
case 1622:
case 1798:
case 2450:
case 3361:
case 3479:
case 3099:
case 1526:
case 3486:
case 3207:
case 1686:
case 3500:
case 510:
case 395:
case 1928:
case 3422:
case 2732:
case 661:
case 1272:
case 212:
case 3667:
case 1867:
case 4088:
case 3837:
case 1637:
case 3621:
case 1821:
case 1304:
case 2614:
case 206:
case 1459:
case 1118:
case 1782:
case 1996:
case 709:
case 1195:
case 89:
case 1224:
case 72:
case 3094:
case 3474:
case 993:
case 2220:
case 134:
case 3810:
case 549:
case 3739:
case 2429:
case 491:
case 2254:
case 3811:
case 1611:
case 2301:
case 1038:
case 3995:
case 3196:
case 1250:
case 2835:
case 2339:
case 2665:
case 406:
case 66:
case 1412:
case 2093:
case 721:
case 1703:
case 3287:
case 3620:
case 1820:
case 3406:
case 2824:
case 3613:
case 584:
case 902:
case 3128:
case 29:
case 3577:
case 3236:
case 625:
case 1885:
case 3685:
case 2851:
case 3214:
case 139:
case 1757:
case 1330:
case 3360:
case 4008:
case 518:
case 2652:
case 3580:
case 1420:
case 3806:
case 1606:
case 2873:
case 1502:
case 2760:
case 704:
case 1145:
case 3534:
case 1317:
case 2671:
case 1812:
case 3612:
case 1557:
case 2947:
case 4043:
case 1564:
case 2435:
case 317:
case 2380:
case 633:
case 2560:
case 1702:
case 2756:
case 3219:
case 1384:
case 2472:
case 2829:
case 1858:
case 2063:
case 2137:
case 4084:
case 221:
case 531:
case 2186:
case 2541:
case 555:
case 465:
case 82:
case 2913:
case 79:
case 1187:
case 919:
case 3478:
case 3015:
case 2618:
case 1308:
case 1114:
case 2741:
case 1935:
case 4089:
case 1342:
case 4076:
case 1847:
case 1170:
case 487:
case 3907:
case 600:
case 2062:
case 3878:
case 2122:
case 887:
case 14:
case 136:
case 1794:
case 980:
case 3390:
case 617:
case 2846:
case 204:
case 1000:
case 273:
case 158:
case 342:
case 2790:
case 1119:
case 2106:
case 2905:
case 1152:
case 3919:
case 1497:
case 404:
case 1077:
case 3173:
case 2338:
case 1768:
case 2428:
case 2247:
case 3738:
case 3391:
case 2591:
case 1393:
case 1388:
case 586:
case 4062:
case 804:
case 1246:
case 3129:
case 3003:
case 3538:
case 2959:
case 1107:
case 1568:
case 3970:
case 2496:
case 2089:
case 247:
case 3135:
case 170:
case 3936:
case 608:
case 2740:
case 1165:
case 706:
case 1966:
case 3057:
case 791:
case 4009:
case 3987:
case 3172:
case 1034:
case 3340:
case 2828:
case 3295:
case 2017:
case 2540:
case 4055:
case 3124:
case 3002:
case 265:
case 3151:
case 3218:
case 3697:
case 1897:
case 1392:
case 4063:
case 2967:
case 712:
case 1693:
case 4037:
case 3888:
case 1688:
case 1440:
case 1926:
case 1294:
case 533:
case 3024:
case 2117:
case 3981:
case 2290:
case 1180:
case 921:
case 3051:
case 2444:
case 4086:
case 1116:
case 3157:
case 3164:
case 4010:
case 1053:
case 2868:
case 1134:
case 1983:
case 2345:
case 1998:
case 2638:
case 3492:
case 3072:
case 644:
case 3035:
case 2130:
case 888:
case 4023:
case 3691:
case 3103:
case 235:
case 2797:
case 2975:
case 1692:
case 4074:
case 684:
case 2241:
case 1728:
case 814:
case 3029:
case 1596:
case 85:
case 2468:
case 582:
case 904:
case 3148:
case 2844:
case 271:
case 3169:
case 973:
case 4:
case 1796:
case 1052:
case 2006:
case 3073:
case 45:
case 1101:
case 56:
case 3493:
case 414:
case 1177:
case 1840:
case 214:
case 3977:
case 3795:
case 4006:
case 3641:
case 1841:
case 1100:
case 2:
case 2318:
case 2022:
case 851:
case 2104:
case 3442:
case 649:
case 3939:
case 835:
case 248:
case 2395:
case 132:
case 880:
case 2074:
case 120:
case 27:
case 987:
case 3518:
case 451:
case 561:
case 1490:
case 1643:
case 1244:
case 435:
case 33:
case 346:
case 871:
case 2960:
case 3066:
case 1014:
case 1746:
case 2131:
case 419:
case 823:
case 3690:
case 1890:
case 1036:
case 183:
case 3443:
case 2894:
case 3934:
case 840:
case 3183:
case 2010:
case 1964:
case 689:
case 2291:
case 288:
case 3408:
case 819:
case 423:
case 2956:
case 1546:
case 3050:
case 2155:
case 965:
case 2163:
case 3925:
case 1441:
case 440:
case 1268:
case 2192:
case 3200:
case 4078:
case 2785:
case 1751:
case 1535:
case 2464:
case 2803:
case 1460:
case 307:
case 3876:
case 1689:
case 1735:
case 508:
case 310:
case 1551:
case 2353:
case 2585:
case 595:
case 2601:
case 1311:
case 1524:
case 3484:
case 3765:
case 3753:
case 748:
case 2520:
case 2365:
case 1772:
case 7:
case 1456:
case 63:
case 2869:
case 3656:
case 3817:
case 2307:
case 2371:
case 686:
case 2469:
case 3312:
case 2802:
case 198:
case 2448:
case 2227:
case 1729:
case 3552:
case 2680:
case 788:
case 3771:
case 3884:
case 1684:
case 2193:
case 1283:
case 1298:
case 402:
case 2625:
case 293:
case 1529:
case 3830:
case 2990:
case 3489:
case 2403:
case 991:
case 1860:
case 1773:
case 416:
case 2352:
case 2857:
case 1306:
case 2864:
case 3571:
case 1226:
case 3507:
case 2898:
case 3225:
case 3194:
case 1609:
case 2319:
case 3305:
case 2815:
case 517:
case 216:
case 3831:
case 3280:
case 1631:
case 2705:
case 1202:
case 493:
case 1475:
case 2256:
case 202:
case 3770:
case 2759:
case 1264:
case 2260:
case 2370:
case 2505:
case 500:
case 318:
case 2142:
case 893:
case 1655:
case 3855:
case 723:
case 3359:
case 2314:
case 1604:
case 1323:
case 2108:
case 2554:
case 2336:
case 2567:
case 1203:
case 771:
case 675:
case 3714:
case 2387:
case 1766:
case 384:
case 1310:
case 2600:
case 780:
case 190:
case 3463:
case 1379:
case 1269:
case 2754:
case 1875:
case 1248:
case 3431:
case 3239:
case 735:
case 631:
case 3354:
case 3277:
case 1750:
case 1337:
case 2483:
case 3514:
case 3321:
case 1512:
case 2138:
case 3263:
case 3373:
case 3834:
case 1634:
case 1352:
case 1864:
case 3664:
case 2306:
case 3816:
case 1857:
case 396:
case 2773:
case 4018:
case 2860:
case 193:
case 668:
case 3255:
case 2529:
case 2283:
case 3825:
case 2298:
case 1712:
case 2215:
case 3097:
case 298:
case 3506:
case 3439:
case 3880:
case 3231:
case 2729:
case 1448:
case 2617:
case 2856:
case 205:
case 1469:
case 2573:
case 2456:
case 1365:
case 1275:
case 3908:
case 1402:
case 3669:
case 1639:
case 3839:
case 1520:
case 672:
case 3648:
case 1848:
case 3877:
case 2045:
case 464:
case 554:
case 3262:
case 1601:
case 2311:
case 490:
case 2551:
case 1353:
case 2735:
case 1232:
case 3351:
case 2689:
case 3204:
case 652:
case 2676:
case 2572:
case 3511:
case 1803:
case 324:
case 1464:
case 503:
case 2282:
case 574:
case 997:
case 1192:
case 1713:
case 890:
case 3434:
case 1078:
case 2750:
case 3523:
case 2566:
case 2337:
case 2662:
case 1415:
case 2427:
case 2248:
case 3350:
case 2386:
case 1143:
case 2379:
case 511:
case 3510:
case 3800:
case 290:
case 1940:
case 2550:
case 3682:
case 2433:
case 2766:
case 939:
case 3723:
case 4045:
case 2944:
case 2323:
case 2604:
case 3481:
case 1108:
case 2655:
case 3230:
case 3774:
case 579:
case 498:
case 2264:
case 3988:
case 2257:
case 2833:
case 102:
case 3626:
case 1826:
case 2663:
case 1256:
case 3190:
case 469:
case 559:
case 1991:
case 728:
case 2631:
case 898:
case 3284:
case 2609:
case 3615:
case 1559:
case 3722:
case 2432:
case 3698:
case 1883:
case 394:
case 2101:
case 832:
case 2982:
case 360:
case 820:
case 790:
case 94:
case 3243:
case 958:
case 843:
case 2139:
case 171:
case 1844:
case 1468:
case 3962:
case 432:
case 420:
case 1241:
case 2728:
case 1449:
case 1189:
case 1176:
case 443:
case 4070:
case 151:
case 3328:
case 2491:
case 135:
case 1797:
case 978:
case 3012:
case 2071:
case 3160:
case 2891:
case 3931:
case 1927:
case 483:
case 119:
case 4036:
case 1961:
case 2983:
case 2134:
case 3649:
case 1638:
case 3838:
case 1011:
case 2915:
case 3668:
case 2053:
case 1868:
case 3909:
case 538:
case 2180:
case 326:
case 866:
case 1444:
case 123:
case 3013:
case 3156:
case 962:
case 140:
case 277:
case 2693:
case 1933:
case 2688:
case 2378:
case 950:
case 3133:
case 1037:
case 545:
case 2441:
case 477:
case 3067:
case 3054:
case 2902:
case 1155:
case 3917:
case 1956:
case 705:
case 3778:
case 1086:
case 1291:
case 798:
case 1499:
case 2642:
case 828:
case 188:
case 567:
case 457:
case 3288:
case 4053:
case 1010:
case 3293:
case 3694:
case 1894:
case 877:
case 2087:
case 3930:
case 283:
case 1023:
case 3578:
case 4065:
case 4071:
case 2244:
case 3059:
case 4007:
case 522:
case 530:
case 1758:
case 3976:
case 2070:
case 3175:
case 2643:
case 243:
case 372:
case 17:
case 232:
case 1162:
case 1899:
case 1558:
case 2948:
case 1318:
case 2969:
case 1104:
case 1022:
case 624:
case 3292:
case 3005:
case 585:
case 537:
case 173:
case 3906:
case 2000:
case 659:
case 3542:
case 1790:
case 376:
case 841:
case 104:
case 2973:
case 739:
case 4039:
case 1004:
case 1122:
case 2794:
case 227:
case 236:
case 2678:
case 356:
case 3032:
case 153:
case 278:
case 1590:
case 441:
case 3159:
case 1912:
case 2342:
case 338:
case 3495:
case 2170:
case 2935:
case 2228:
case 3818:
case 957:
case 2308:
case 1123:
case 2114:
case 4016:
case 3543:
case 481:
case 692:
case 928:
case 1297:
case 4034:
case 3708:
case 2081:
case 1913:
case 450:
case 1985:
case 1541:
case 2951:
case 1137:
case 3508:
case 3033:
case 121:
case 262:
case 3167:
case 3154:
case 4025:
case 611:
case 1063:
case 1954:
case 2544:
case 1921:
case 3445:
case 3937:
case 3986:
case 2080:
case 3185:
case 3979:
case 250:
case 3792:
case 3056:
case 674:
case 1828:
case 385:
case 165:
case 1111:
case 862:
case 1258:
case 734:
case 2034:
case 2153:
case 281:
case 572:
case 2016:
case 3910:
case 1740:
case 61:
case 2966:
case 2165:
case 109:
case 147:
case 88:
case 3696:
case 12:
case 367:
case 84:
case 827:
case 1496:
case 3788:
case 2171:
case 3793:
case 599:
case 1591:
case 943:
case 3974:
case 2388:
case 436:
case 427:
case 3922:
case 1247:
case 2768:
case 878:
case 3845:
case 1645:
case 1791:
case 1338:
case 2001:
case 1106:
case 4000:
case 458:
case 1575:
case 4038:
case 3382:
case 1220:
case 3887:
case 969:
case 2195:
case 815:
case 524:
case 3470:
case 770:
case 3562:
case 2304:
case 2623:
case 3814:
case 2782:
case 1285:
case 2251:
case 2459:
case 2118:
case 3504:
case 622:
case 2637:
case 1997:
case 2362:
case 2272:
case 3419:
case 630:
case 905:
case 2867:
case 112:
case 354:
case 3650:
case 415:
case 2686:
case 1042:
case 2679:
case 3762:
case 1212:
case 3563:
case 439:
case 1533:
case 2331:
case 2783:
case 1450:
case 3041:
case 3819:
case 1619:
case 2309:
case 2467:
case 3315:
case 2454:
case 2421:
case 3383:
case 2229:
case 3414:
case 1466:
case 839:
case 2859:
case 3763:
case 3509:
case 2674:
case 3531:
case 3487:
case 2273:
case 1561:
case 3530:
case 1829:
case 778:
case 513:
case 359:
case 3453:
case 1325:
case 676:
case 1205:
case 1756:
case 1092:
case 2564:
case 2557:
case 3807:
case 3784:
case 3465:
case 2812:
case 1671:
case 2502:
case 656:
case 3517:
case 1556:
case 1334:
case 758:
case 2420:
case 2606:
case 3357:
case 74:
case 990:
case 3584:
case 2413:
case 727:
case 239:
case 2757:
case 2485:
case 1259:
case 1851:
case 3651:
case 1824:
case 3776:
case 762:
case 3452:
case 1958:
case 1093:
case 2569:
case 2703:
case 3197:
case 1088:
case 3091:
case 3471:
case 1835:
case 1339:
case 3348:
case 2769:
case 434:
case 3589:
case 2748:
case 1221:
case 3576:
case 1653:
case 2603:
case 3676:
case 2204:
case 3689:
case 1430:
case 149:
case 2351:
case 1385:
case 4047:
case 2434:
case 1565:
case 1200:
case 2416:
case 3282:
case 3751:
case 2839:
case 752:
case 2480:
case 1753:
case 2335:
case 2669:
case 2908:
case 1417:
case 3456:
case 3551:
case 2425:
case 620:
case 1765:
case 2262:
case 2372:
case 2140:
case 2209:
case 1884:
case 1707:
case 2401:
case 2097:
case 2477:
case 954:
case 2825:
case 91:
case 4058:
case 2329:
case 3283:
case 666:
case 40:
case 3573:
case 305:
case 1312:
case 813:
case 3856:
case 3729:
case 1552:
case 683:
case 2439:
case 2231:
case 3306:
case 2664:
case 1168:
case 3994:
case 3138:
case 2263:
case 3226:
case 829:
case 413:
case 1476:
case 1281:
case 1830:
case 3630:
case 799:
case 369:
case 2706:
case 1660:
case 3773:
case 2191:
case 2574:
case 3018:
case 1831:
case 1280:
case 2190:
case 3095:
case 1661:
case 213:
case 3202:
case 1938:
case 3432:
case 1225:
case 2615:
case 1570:
case 677:
case 401:
case 3609:
case 3968:
case 1462:
case 118:
case 896:
case 2774:
case 229:
case 1404:
case 628:
case 1855:
case 3655:
case 20:
case 2230:
case 2881:
case 3663:
case 1863:
case 1234:
case 539:
case 144:
case 1633:
case 1216:
case 3257:
case 801:
case 2723:
case 1714:
case 515:
case 824:
case 2682:
case 1046:
case 2579:
case 390:
case 2586:
case 2141:
case 3310:
case 2800:
case 3323:
case 979:
case 1455:
case 1787:
case 3203:
case 3944:
case 2786:
case 1354:
case 1536:
case 1277:
case 1367:
case 1409:
case 1201:
case 1862:
case 3566:
case 1321:
case 3750:
case 1675:
case 2047:
case 3379:
case 3461:
case 3386:
case 2350:
case 1587:
case 3427:
case 3248:
case 1431:
case 2156:
case 1545:
case 2013:
case 70:
case 226:
case 468:
case 237:
case 3180:
case 3688:
case 1888:
case 536:
case 4021:
case 54:
case 3693:
case 3125:
case 2020:
case 499:
case 1035:
case 578:
case 2242:
case 1745:
case 868:
case 3891:
case 1691:
case 3065:
case 328:
case 2909:
case 2668:
case 1157:
case 3998:
case 3728:
case 938:
case 175:
case 690:
case 2962:
case 3596:
case 1103:
case 3071:
case 2012:
case 4059:
case 472:
case 1900:
case 3052:
case 260:
case 131:
case 3528:
case 58:
case 1073:
case 155:
case 1493:
case 294:
case 2396:
case 452:
case 1169:
case 2243:
case 3969:
case 3608:
case 252:
case 3948:
case 1939:
case 2699:
case 494:
case 1718:
case 1901:
case 3100:
case 2005:
case 3019:
case 3841:
case 1641:
case 3643:
case 343:
case 581:
case 4012:
case 1358:
case 570:
case 2132:
case 1198:
case 2694:
case 2293:
case 701:
case 2288:
case 1916:
case 1115:
case 3746:
case 366:
case 186:
case 930:
case 796:
case 1066:
case 3014:
case 826:
case 837:
case 1443:
case 163:
case 922:
case 541:
case 698:
case 4020:
case 2067:
case 985:
case 3441:
case 1925:
case 3249:
case 2021:
case 2984:
case 3268:
case 3378:
case 1347:
case 268:
case 426:
case 437:
case 3642:
case 1842:
case 669:
case 2778:
case 1050:
case 2917:
case 3546:
case 1408:
case 3951:
case 3343:
case 485:
case 1150:
case 16:
case 38:
case 1658:
case 3858:
case 1026:
case 792:
case 362:
case 926:
case 2508:
case 830:
case 2121:
case 1965:
case 3114:
case 2818:
case 3308:
case 3228:
case 3935:
case 3136:
case 2061:
case 2708:
case 1083:
case 422:
case 2911:
case 3187:
case 1478:
case 3972:
case 1015:
case 711:
case 430:
case 1341:
case 2543:
case 2742:
case 759:
case 1245:
case 3929:
case 528:
case 256:
case 2032:
case 3678:
case 1878:
case 2075:
case 845:
case 1647:
case 3847:
case 557:
case 467:
case 3342:
case 639:
case 1907:
case 1971:
case 2159:
case 276:
case 2542:
case 3119:
case 3458:
case 2906:
case 3000:
case 358:
case 336:
case 327:
case 697:
case 1048:
case 3768:
case 1069:
case 245:
case 2588:
case 2922:
case 3749:
case 1173:
case 952:
case 3497:
case 3171:
case 1003:
case 2788:
case 438:
case 3388:
case 2974:
case 566:
case 456:
case 972:
case 3393:
case 876:
case 341:
case 543:
case 3016:
case 1057:
case 2910:
case 1064:
case 161:
case 1340:
case 222:
case 1987:
case 999:
case 1172:
case 2344:
case 703:
case 1936:
case 1135:
case 532:
case 3966:
case 2060:
case 2923:
case 1914:
case 4027:
case 774:
case 634:
case 2937:
case 4033:
case 3897:
case 3025:
case 2120:
case 3544:
case 2113:
case 2628:
case 2792:
case 1295:
case 2979:
case 2986:
case 3080:
case 1151:
case 2509:
case 767:
case 2147:
case 2870:
case 2436:
case 2763:
case 3859:
case 1659:
case 2414:
case 1423:
case 3355:
case 3583:
case 2326:
case 569:
case 1410:
case 2531:
case 3674:
case 1822:
case 1207:
case 2709:
case 2563:
case 1361:
case 1271:
case 1486:
case 1099:
case 2731:
case 1437:
case 505:
case 1945:
case 1581:
case 2555:
case 4040:
case 2398:
case 3454:
case 641:
case 2041:
case 3854:
case 3867:
case 681:
case 492:
case 2419:
case 2211:
case 3272:
case 3362:
case 3637:
case 1621:
case 1253:
case 1375:
case 1500:
case 3679:
case 1422:
case 2650:
case 3235:
case 21:
case 785:
case 254:
case 334:
case 1094:
case 2382:
case 1474:
case 730:
case 411:
case 901:
case 3782:
case 3623:
case 650:
case 3224:
case 1700:
case 2562:
case 203:
case 2090:
case 81:
case 4090:
case 2348:
case 403:
case 3250:
case 2369:
case 2279:
case 2471:
case 2286:
case 1918:
case 3412:
case 2865:
case 2407:
case 211:
case 662:
case 1811:
case 3503:
case 913:
case 1049:
case 454:
case 803:
case 2624:
case 1613:
case 1501:
case 315:
case 3266:
case 3376:
case 1214:
case 590:
case 2197:
case 2210:
case 3703:
case 90:
case 292:
case 1287:
case 3548:
case 2789:
case 3820:
case 1806:
case 3606:
case 2357:
case 279:
case 2274:
case 100:
case 678:
case 3420:
case 1580:
case 2040:
case 2517:
case 3946:
case 3502:
case 339:
case 3757:
case 1716:
case 2584:
case 2717:
case 2978:
case 756:
case 259:
case 2453:
case 1780:
case 2530:
case 627:
case 2871:
case 1612:
case 3812:
case 2465:
case 2807:
case 1356:
case 117:
case 1725:
case 1516:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759179601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,];
var gg_b = "1759179601/";

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
