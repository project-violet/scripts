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
case 446:
case 1448:
case 3450:
case 53:
case 852:
case 1267:
case 2460:
case 2216:
case 1805:
case 756:
case 3339:
case 3532:
case 1491:
case 1923:
case 2113:
case 3886:
case 2428:
case 797:
case 2076:
case 2844:
case 2733:
case 878:
case 3348:
case 1906:
case 3851:
case 2802:
case 651:
case 129:
case 3391:
case 2943:
case 1506:
case 1354:
case 4036:
case 1868:
case 3690:
case 1421:
case 224:
case 980:
case 3217:
case 2840:
case 757:
case 4011:
case 1894:
case 3081:
case 3585:
case 859:
case 1783:
case 570:
case 1249:
case 1651:
case 2887:
case 562:
case 3321:
case 3077:
case 3056:
case 892:
case 1017:
case 1686:
case 3742:
case 2871:
case 1238:
case 2441:
case 1820:
case 3725:
case 2229:
case 3704:
case 3678:
case 3624:
case 3049:
case 1281:
case 2498:
case 373:
case 3433:
case 3852:
case 3608:
case 2862:
case 2495:
case 1966:
case 3599:
case 475:
case 2232:
case 2180:
case 62:
case 2750:
case 2179:
case 3760:
case 2400:
case 1492:
case 750:
case 1865:
case 3516:
case 1576:
case 2655:
case 3529:
case 961:
case 2442:
case 1043:
case 1197:
case 2872:
case 1957:
case 1976:
case 2404:
case 1130:
case 1282:
case 3798:
case 2383:
case 923:
case 833:
case 3789:
case 3243:
case 3159:
case 576:
case 2023:
case 3146:
case 116:
case 3815:
case 1445:
case 986:
case 3082:
case 2517:
case 1652:
case 70:
case 2563:
case 1891:
case 3390:
case 1185:
case 711:
case 486:
case 3418:
case 350:
case 1848:
case 325:
case 3337:
case 226:
case 461:
case 1490:
case 508:
case 3701:
case 2059:
case 2973:
case 616:
case 3621:
case 3123:
case 2046:
case 2230:
case 1437:
case 283:
case 2182:
case 3305:
case 3378:
case 423:
case 2461:
case 2752:
case 2874:
case 3762:
case 1279:
case 2573:
case 56:
case 3219:
case 188:
case 918:
case 2614:
case 487:
case 1468:
case 444:
case 2311:
case 3320:
case 1821:
case 754:
case 2336:
case 1247:
case 3639:
case 3080:
case 3394:
case 1650:
case 3953:
case 617:
case 3193:
case 3047:
case 2135:
case 2471:
case 390:
case 3368:
case 4010:
case 2864:
case 89:
case 3772:
case 2841:
case 397:
case 2401:
case 2138:
case 648:
case 3934:
case 3009:
case 2181:
case 2683:
case 863:
case 3744:
case 3452:
case 1063:
case 2919:
case 807:
case 1892:
case 2177:
case 3927:
case 356:
case 480:
case 1352:
case 1559:
case 622:
case 2718:
case 2503:
case 1209:
case 2825:
case 2804:
case 1946:
case 396:
case 553:
case 3308:
case 3375:
case 1736:
case 2596:
case 2903:
case 3692:
case 738:
case 3013:
case 219:
case 1073:
case 2472:
case 2926:
case 1116:
case 1475:
case 3176:
case 3157:
case 702:
case 3787:
case 629:
case 2519:
case 3273:
case 2312:
case 1758:
case 1188:
case 3740:
case 2593:
case 1733:
case 2906:
case 3031:
case 435:
case 3535:
case 3016:
case 1428:
case 2350:
case 143:
case 1057:
case 3360:
case 2439:
case 3088:
case 1943:
case 1658:
case 229:
case 1802:
case 2890:
case 79:
case 3276:
case 3257:
case 541:
case 2824:
case 333:
case 1216:
case 3982:
case 619:
case 2878:
case 2448:
case 2923:
case 1611:
case 3671:
case 2491:
case 1288:
case 2238:
case 2686:
case 1871:
case 3389:
case 3582:
case 3811:
case 3836:
case 536:
case 1066:
case 75:
case 1498:
case 2281:
case 3410:
case 1840:
case 2421:
case 2277:
case 3722:
case 3935:
case 2868:
case 2506:
case 1489:
case 3858:
case 2651:
case 1887:
case 248:
case 3029:
case 3644:
case 1109:
case 3745:
case 2783:
case 601:
case 3119:
case 1750:
case 928:
case 838:
case 1180:
case 3395:
case 3748:
case 3981:
case 3672:
case 2557:
case 3938:
case 1400:
case 2714:
case 1495:
case 1862:
case 11:
case 3293:
case 2966:
case 942:
case 706:
case 3721:
case 2710:
case 683:
case 3342:
case 3103:
case 471:
case 3556:
case 3577:
case 315:
case 1754:
case 3812:
case 2043:
case 949:
case 2197:
case 626:
case 1184:
case 1006:
case 352:
case 2957:
case 2976:
case 413:
case 707:
case 3967:
case 4015:
case 2284:
case 1059:
case 3913:
case 1610:
case 1402:
case 1297:
case 1752:
case 3814:
case 4050:
case 2318:
case 306:
case 1046:
case 205:
case 1230:
case 2185:
case 3664:
case 3302:
case 2654:
case 971:
case 1563:
case 2891:
case 3259:
case 2755:
case 3698:
case 2424:
case 3246:
case 792:
case 2351:
case 3660:
case 1898:
case 2650:
case 3909:
case 48:
case 2712:
case 856:
case 1471:
case 3034:
case 1227:
case 3411:
case 3436:
case 442:
case 1135:
case 1487:
case 3674:
case 288:
case 2132:
case 3708:
case 363:
case 428:
case 1336:
case 1440:
case 2247:
case 1870:
case 778:
case 127:
case 2468:
case 1889:
case 3458:
case 1234:
case 897:
case 1311:
case 890:
case 3642:
case 3301:
case 39:
case 1156:
case 2465:
case 1177:
case 2892:
case 3117:
case 3455:
case 214:
case 1149:
case 1503:
case 3569:
case 80:
case 300:
case 94:
case 3790:
case 291:
case 112:
case 1401:
case 1138:
case 982:
case 572:
case 3053:
case 2129:
case 3584:
case 2063:
case 1751:
case 1683:
case 1181:
case 560:
case 3737:
case 3695:
case 868:
case 2633:
case 1167:
case 2475:
case 2116:
case 2188:
case 3984:
case 3768:
case 1519:
case 3372:
case 3579:
case 2758:
case 935:
case 704:
case 35:
case 1804:
case 579:
case 1842:
case 3969:
case 119:
case 2711:
case 2959:
case 2736:
case 673:
case 3821:
case 4041:
case 4064:
case 1320:
case 2458:
case 2674:
case 3096:
case 3132:
case 2708:
case 3279:
case 2513:
case 190:
case 1854:
case 3420:
case 855:
case 1772:
case 2340:
case 820:
case 1193:
case 2660:
case 1394:
case 1648:
case 466:
case 2909:
case 549:
case 2698:
case 125:
case 1106:
case 2030:
case 3405:
case 3424:
case 1337:
case 895:
case 3478:
case 403:
case 717:
case 3026:
case 3848:
case 2143:
case 2509:
case 3185:
case 2097:
case 1486:
case 1553:
case 3269:
case 1084:
case 542:
case 1378:
case 1762:
case 1451:
case 168:
case 3318:
case 3839:
case 565:
case 2913:
case 1123:
case 1069:
case 2689:
case 3003:
case 654:
case 3490:
case 3386:
case 1013:
case 460:
case 2412:
case 2969:
case 3073:
case 3959:
case 964:
case 2600:
case 722:
case 1375:
case 1527:
case 936:
case 826:
case 3315:
case 196:
case 1308:
case 4042:
case 3188:
case 3822:
case 748:
case 1273:
case 458:
case 2372:
case 157:
case 710:
case 3131:
case 3475:
case 4025:
case 1176:
case 1452:
case 2053:
case 1761:
case 3129:
case 498:
case 3063:
case 1645:
case 729:
case 1365:
case 1622:
case 200:
case 937:
case 479:
case 1702:
case 2790:
case 391:
case 4000:
case 2705:
case 3209:
case 2778:
case 1263:
case 2362:
case 2625:
case 3546:
case 156:
case 2301:
case 941:
case 3892:
case 1166:
case 1927:
case 314:
case 697:
case 3153:
case 348:
case 2029:
case 2644:
case 2163:
case 1637:
case 1081:
case 2266:
case 2410:
case 81:
case 3256:
case 310:
case 102:
case 3506:
case 1038:
case 2858:
case 1690:
case 2341:
case 3993:
case 1605:
case 998:
case 1725:
case 1704:
case 3618:
case 656:
case 4040:
case 1742:
case 2389:
case 3820:
case 322:
case 1056:
case 2370:
case 3017:
case 535:
case 3923:
case 1886:
case 1532:
case 2792:
case 1339:
case 958:
case 3491:
case 4044:
case 2328:
case 1450:
case 3824:
case 2099:
case 2507:
case 1818:
case 3448:
case 2640:
case 1391:
case 960:
case 3890:
case 464:
case 582:
case 3906:
case 1851:
case 2687:
case 1348:
case 2535:
case 1067:
case 2016:
case 3350:
case 791:
case 2360:
case 1694:
case 3282:
case 1931:
case 3130:
case 1345:
case 2538:
case 3957:
case 2126:
case 47:
case 2581:
case 1764:
case 2223:
case 967:
case 2662:
case 2556:
case 2304:
case 2577:
case 154:
case 3652:
case 1146:
case 215:
case 2206:
case 1815:
case 2721:
case 1159:
case 3422:
case 788:
case 668:
case 2601:
case 1243:
case 1789:
case 2739:
case 1599:
case 3235:
case 934:
case 824:
case 2293:
case 513:
case 3127:
case 3966:
case 194:
case 430:
case 2977:
case 2956:
case 2196:
case 1608:
case 1852:
case 3615:
case 60:
case 173:
case 259:
case 2567:
case 2938:
case 3207:
case 317:
case 981:
case 4001:
case 2855:
case 292:
case 1531:
case 111:
case 2791:
case 2119:
case 1760:
case 4062:
case 1588:
case 3333:
case 2748:
case 690:
case 2193:
case 523:
case 107:
case 2691:
case 814:
case 3135:
case 3471:
case 2368:
case 2772:
case 2296:
case 408:
case 1660:
case 2394:
case 692:
case 561:
case 3898:
case 2079:
case 891:
case 1371:
case 1027:
case 2320:
case 586:
case 20:
case 3336:
case 3107:
case 1513:
case 163:
case 3573:
case 976:
case 3715:
case 1674:
case 3828:
case 106:
case 4048:
case 383:
case 2324:
case 3182:
case 2378:
case 1814:
case 2762:
case 71:
case 678:
case 4091:
case 615:
case 3059:
case 3973:
case 1913:
case 2123:
case 1344:
case 2418:
case 1030:
case 2850:
case 587:
case 1246:
case 2337:
case 3860:
case 544:
case 2553:
case 3563:
case 1302:
case 4039:
case 1509:
case 1097:
case 2486:
case 2203:
case 3519:
case 1984:
case 3312:
case 1372:
case 2997:
case 970:
case 2740:
case 1580:
case 3167:
case 1794:
case 2176:
case 2157:
case 257:
case 1695:
case 3596:
case 633:
case 2013:
case 1412:
case 3842:
case 4022:
case 15:
case 4045:
case 2375:
case 1778:
case 3253:
case 1625:
case 1569:
case 3718:
case 9:
case 604:
case 3503:
case 1724:
case 3800:
case 3156:
case 3177:
case 320:
case 93:
case 1117:
case 2166:
case 2927:
case 1642:
case 969:
case 1301:
case 3786:
case 2645:
case 2009:
case 3181:
case 2597:
case 1737:
case 2744:
case 2761:
case 2452:
case 888:
case 1584:
case 3895:
case 4092:
case 312:
case 2530:
case 297:
case 453:
case 3355:
case 238:
case 4094:
case 2678:
case 719:
case 2605:
case 2932:
case 1836:
case 3310:
case 2056:
case 104:
case 1370:
case 2454:
case 953:
case 2742:
case 1907:
case 3109:
case 2081:
case 2585:
case 3887:
case 1644:
case 4:
case 202:
case 1341:
case 2690:
case 1364:
case 3489:
case 1858:
case 324:
case 1266:
case 3658:
case 2668:
case 1088:
case 2985:
case 1016:
case 4078:
case 1360:
case 3076:
case 343:
case 712:
case 3733:
case 1414:
case 2348:
case 4090:
case 2700:
case 2532:
case 1792:
case 462:
case 3288:
case 3611:
case 2620:
case 3113:
case 1671:
case 2886:
case 1173:
case 3314:
case 3231:
case 2818:
case 4037:
case 445:
case 1507:
case 1374:
case 1276:
case 2450:
case 547:
case 584:
case 985:
case 540:
case 1206:
case 1483:
case 178:
case 3517:
case 254:
case 1103:
case 829:
case 477:
case 1601:
case 3285:
case 96:
case 2159:
case 199:
case 606:
case 2770:
case 3425:
case 701:
case 2916:
case 1967:
case 152:
case 2345:
case 2798:
case 1538:
case 3383:
case 4008:
case 2529:
case 2665:
case 2322:
case 3754:
case 1812:
case 3442:
case 2988:
case 2741:
case 3400:
case 3093:
case 192:
case 211:
case 2531:
case 1791:
case 1855:
case 726:
case 932:
case 1981:
case 3180:
case 1395:
case 3750:
case 2760:
case 783:
case 4065:
case 1977:
case 1300:
case 663:
case 2728:
case 2675:
case 1196:
case 2608:
case 2774:
case 908:
case 1949:
case 1873:
case 3222:
case 258:
case 3766:
case 2749:
case 3245:
case 933:
case 823:
case 2283:
case 1589:
case 2025:
case 193:
case 1570:
case 2423:
case 3102:
case 2385:
case 2738:
case 662:
case 3144:
case 2653:
case 2151:
case 2948:
case 2781:
case 45:
case 670:
case 1609:
case 1564:
case 3482:
case 782:
case 1541:
case 1998:
case 3187:
case 1863:
case 2591:
case 3809:
case 0:
case 2767:
case 1788:
case 3407:
case 3292:
case 2548:
case 551:
case 1158:
case 1560:
case 2332:
case 2539:
case 1799:
case 669:
case 735:
case 1528:
case 1970:
case 153:
case 2921:
case 1613:
case 400:
case 3910:
case 2493:
case 1092:
case 904:
case 3514:
case 1989:
case 1136:
case 844:
case 3435:
case 38:
case 1021:
case 1525:
case 1377:
case 1504:
case 3723:
case 880:
case 407:
case 713:
case 1254:
case 3101:
case 108:
case 3162:
case 3481:
case 1542:
case 959:
case 365:
case 3054:
case 1785:
case 2041:
case 2064:
case 2545:
case 3221:
case 2466:
case 1417:
case 2210:
case 3847:
case 1381:
case 3449:
case 1995:
case 1819:
case 2630:
case 3879:
case 463:
case 328:
case 3880:
case 3050:
case 2316:
case 1367:
case 1679:
case 677:
case 952:
case 52:
case 1680:
case 2214:
case 349:
case 3172:
case 3884:
case 4030:
case 2399:
case 978:
case 2074:
case 2846:
case 915:
case 1904:
case 185:
case 1039:
case 3291:
case 3869:
case 2707:
case 1803:
case 588:
case 2627:
case 139:
case 1215:
case 2806:
case 3160:
case 3275:
case 3558:
case 2937:
case 3208:
case 2780:
case 1843:
case 1473:
case 1587:
case 177:
case 1635:
case 2990:
case 1902:
case 2747:
case 3536:
case 639:
case 452:
case 78:
case 3128:
case 1075:
case 846:
case 1571:
case 66:
case 2978:
case 2520:
case 742:
case 4085:
case 1607:
case 765:
case 1110:
case 2255:
case 2920:
case 1971:
case 921:
case 3807:
case 3170:
case 2524:
case 608:
case 2001:
case 1463:
case 3746:
case 3164:
case 1940:
case 1797:
case 2537:
case 3643:
case 1065:
case 907:
case 2784:
case 230:
case 2968:
case 1730:
case 2994:
case 632:
case 818:
case 2631:
case 3195:
case 3881:
case 3319:
case 2616:
case 1667:
case 1379:
case 34:
case 900:
case 2688:
case 2236:
case 840:
case 3955:
case 3220:
case 404:
case 2965:
case 1962:
case 1419:
case 3294:
case 3479:
case 4029:
case 653:
case 3396:
case 2071:
case 99:
case 2713:
case 2258:
case 169:
case 3268:
case 3100:
case 2866:
case 3086:
case 3290:
case 693:
case 389:
case 264:
case 1677:
case 1656:
case 674:
case 3237:
case 2908:
case 4031:
case 1024:
case 1005:
case 1078:
case 3104:
case 1251:
case 2975:
case 3018:
case 1972:
case 3469:
case 170:
case 3912:
case 1286:
case 1403:
case 548:
case 1218:
case 2061:
case 3278:
case 3051:
case 2446:
case 2330:
case 3867:
case 3205:
case 3224:
case 1037:
case 2876:
case 1681:
case 2857:
case 145:
case 1385:
case 3190:
case 3242:
case 2598:
case 1738:
case 160:
case 2022:
case 1781:
case 2541:
case 496:
case 2609:
case 3137:
case 2729:
case 3204:
case 1777:
case 636:
case 909:
case 2443:
case 1042:
case 3485:
case 1186:
case 1521:
case 293:
case 3178:
case 1283:
case 1749:
case 520:
case 664:
case 1539:
case 1332:
case 938:
case 641:
case 2989:
case 1493:
case 2574:
case 497:
case 2307:
case 2613:
case 253:
case 179:
case 865:
case 2716:
case 1767:
case 637:
case 3853:
case 3432:
case 1095:
case 2863:
case 842:
case 2158:
case 2560:
case 746:
case 902:
case 2788:
case 88:
case 3393:
case 2964:
case 1548:
case 3200:
case 3954:
case 2684:
case 3270:
case 911:
case 387:
case 2417:
case 1466:
case 2155:
case 526:
case 2785:
case 3289:
case 3834:
case 40:
case 1329:
case 1522:
case 630:
case 1098:
case 3264:
case 2254:
case 1992:
case 2900:
case 2377:
case 2669:
case 1070:
case 3366:
case 134:
case 583:
case 973:
case 166:
case 4080:
case 1152:
case 3429:
case 4079:
case 386:
case 1846:
case 1028:
case 3175:
case 3416:
case 527:
case 1115:
case 1476:
case 2904:
case 450:
case 3014:
case 954:
case 2732:
case 1592:
case 4084:
case 1627:
case 2039:
case 2942:
case 26:
case 3274:
case 2680:
case 3499:
case 1214:
case 2048:
case 2679:
case 1316:
case 2367:
case 3830:
case 1060:
case 3357:
case 2647:
case 3533:
case 361:
case 1388:
case 2091:
case 1735:
case 4069:
case 3897:
case 2571:
case 51:
case 1520:
case 1978:
case 3796:
case 2008:
case 1632:
case 2313:
case 3272:
case 2727:
case 3986:
case 3139:
case 2607:
case 744:
case 1937:
case 4082:
case 787:
case 1780:
case 667:
case 1150:
case 3719:
case 925:
case 835:
case 2635:
case 2587:
case 1990:
case 2902:
case 1594:
case 889:
case 1072:
case 2065:
case 494:
case 3055:
case 3201:
case 1154:
case 2940:
case 2797:
case 1537:
case 723:
case 4007:
case 3726:
case 2252:
case 1590:
case 3606:
case 2987:
case 3703:
case 882:
case 786:
case 1524:
case 411:
case 3623:
case 1920:
case 84:
case 666:
case 3518:
case 340:
case 2971:
case 634:
case 276:
case 1062:
case 679:
case 1699:
case 2962:
case 2:
case 3036:
case 347:
case 402:
case 2817:
case 1508:
case 1327:
case 1258:
case 269:
case 3434:
case 1713:
case 2020:
case 3773:
case 3657:
case 438:
case 2094:
case 2379:
case 1616:
case 2496:
case 1087:
case 4049:
case 1133:
case 3829:
case 997:
case 1211:
case 1334:
case 1965:
case 3271:
case 1040:
case 137:
case 1236:
case 2347:
case 543:
case 1688:
case 2090:
case 1397:
case 2972:
case 2384:
case 409:
case 270:
case 524:
case 1446:
case 1330:
case 3816:
case 245:
case 2183:
case 1876:
case 2037:
case 660:
case 3145:
case 1629:
case 1061:
case 1044:
case 957:
case 164:
case 3359:
case 3497:
case 996:
case 2078:
case 4067:
case 1908:
case 2024:
case 2649:
case 2501:
case 1746:
case 376:
case 739:
case 1409:
case 275:
case 3463:
case 785:
case 4093:
case 1189:
case 2623:
case 2121:
case 837:
case 1911:
case 240:
case 1170:
case 1265:
case 3971:
case 665:
case 2262:
case 2726:
case 1363:
case 3987:
case 1198:
case 1958:
case 1835:
case 2551:
case 2201:
case 628:
case 3940:
case 3797:
case 3635:
case 3902:
case 3734:
case 3843:
case 2885:
case 3473:
case 1208:
case 3215:
case 2719:
case 511:
case 1275:
case 1558:
case 1373:
case 2986:
case 3607:
case 708:
case 3571:
case 3075:
case 2918:
case 1882:
case 113:
case 1511:
case 1015:
case 4006:
case 3114:
case 1174:
case 1125:
case 2915:
case 1104:
case 2244:
case 3426:
case 2346:
case 1237:
case 3024:
case 135:
case 3649:
case 3005:
case 2666:
case 1617:
case 2359:
case 1484:
case 3369:
case 1142:
case 1303:
case 189:
case 2202:
case 1205:
case 1867:
case 2816:
case 345:
case 3681:
case 1051:
case 2763:
case 2831:
case 1555:
case 1278:
case 3638:
case 3090:
case 362:
case 3972:
case 2122:
case 3068:
case 182:
case 4066:
case 2271:
case 1319:
case 1881:
case 1512:
case 3094:
case 2676:
case 3667:
case 3496:
case 1195:
case 2829:
case 3380:
case 3901:
case 2036:
case 1100:
case 33:
case 920:
case 3817:
case 2240:
case 369:
case 2434:
case 955:
case 2515:
case 3020:
case 1268:
case 1396:
case 774:
case 2287:
case 1480:
case 1479:
case 2952:
case 2168:
case 2550:
case 420:
case 2393:
case 3964:
case 3335:
case 2200:
case 455:
case 1407:
case 2954:
case 1292:
case 834:
case 762:
case 3716:
case 1809:
case 64:
case 1776:
case 1757:
case 866:
case 1187:
case 2853:
case 1033:
case 3863:
case 3731:
case 3989:
case 3092:
case 881:
case 3307:
case 3970:
case 1673:
case 1171:
case 3613:
case 3111:
case 353:
case 596:
case 3233:
case 393:
case 556:
case 689:
case 73:
case 3570:
case 1245:
case 2105:
case 2124:
case 769:
case 3589:
case 635:
case 2717:
case 1766:
case 867:
case 3443:
case 3873:
case 2554:
case 943:
case 495:
case 2083:
case 1482:
case 803:
case 2137:
case 3960:
case 1663:
case 2225:
case 2950:
case 3729:
case 419:
case 3022:
case 2533:
case 858:
case 1884:
case 1239:
case 3595:
case 149:
case 2897:
case 2274:
case 1983:
case 2499:
case 4046:
case 483:
case 3826:
case 223:
case 1050:
case 671:
case 2830:
case 1619:
case 872:
case 3803:
case 860:
case 613:
case 36:
case 286:
case 3250:
case 3500:
case 2108:
case 2431:
case 3349:
case 2298:
case 165:
case 1481:
case 3542:
case 2646:
case 3896:
case 308:
case 2429:
case 1162:
case 2827:
case 2264:
case 2241:
case 142:
case 1603:
case 3356:
case 3504:
case 3669:
case 2366:
case 2659:
case 91:
case 1626:
case 1880:
case 777:
case 128:
case 1449:
case 3381:
case 898:
case 2933:
case 3684:
case 1456:
case 2165:
case 244:
case 3785:
case 2743:
case 3338:
case 879:
case 427:
case 1583:
case 644:
case 3590:
case 687:
case 3353:
case 1726:
case 869:
case 2164:
case 2643:
case 552:
case 2958:
case 1551:
case 330:
case 2052:
case 1586:
case 1121:
case 2759:
case 3920:
case 2807:
case 515:
case 1518:
case 140:
case 2170:
case 578:
case 703:
case 1703:
case 3524:
case 3001:
case 2189:
case 1986:
case 37:
case 686:
case 559:
case 2373:
case 2536:
case 1796:
case 3924:
case 3632:
case 2174:
case 2128:
case 905:
case 3978:
case 3520:
case 2882:
case 213:
case 1885:
case 3072:
case 3990:
case 1693:
case 271:
case 1951:
case 3806:
case 2160:
case 592:
case 2208:
case 3780:
case 3565:
case 2326:
case 2555:
case 2278:
case 1763:
case 3330:
case 1816:
case 146:
case 2224:
case 3709:
case 1145:
case 3857:
case 2469:
case 1122:
case 2912:
case 1346:
case 1430:
case 235:
case 2104:
case 2303:
case 798:
case 1202:
case 1497:
case 1359:
case 429:
case 1552:
case 2617:
case 1434:
case 3713:
case 3575:
case 1773:
case 1515:
case 410:
case 2856:
case 533:
case 3866:
case 2447:
case 1240:
case 2849:
case 1952:
case 2294:
case 2479:
case 758:
case 2480:
case 1287:
case 24:
case 131:
case 422:
case 3334:
case 282:
case 2955:
case 3965:
case 3133:
case 3631:
case 760:
case 2881:
case 1676:
case 2319:
case 772:
case 2171:
case 736:
case 1120:
case 2910:
case 3493:
case 2435:
case 684:
case 398:
case 3539:
case 1393:
case 910:
case 2140:
case 2407:
case 180:
case 3548:
case 1550:
case 414:
case 808:
case 1853:
case 1432:
case 2033:
case 948:
case 1194:
case 631:
case 2757:
case 2663:
case 2161:
case 1950:
case 1204:
case 3653:
case 737:
case 3151:
case 3948:
case 3781:
case 1137:
case 885:
case 360:
case 646:
case 2102:
case 1190:
case 3991:
case 372:
case 1242:
case 929:
case 3749:
case 1105:
case 451:
case 3004:
case 3025:
case 741:
case 3118:
case 1485:
case 3042:
case 3186:
case 3756:
case 1323:
case 1488:
case 3399:
case 1014:
case 3592:
case 1108:
case 1260:
case 186:
case 521:
case 3457:
case 3922:
case 3634:
case 2172:
case 161:
case 4003:
case 3388:
case 2793:
case 1533:
case 2239:
case 367:
case 3735:
case 874:
case 2884:
case 2050:
case 3316:
case 1830:
case 123:
case 507:
case 1357:
case 1228:
case 2619:
case 1274:
case 405:
case 3214:
case 2449:
case 3630:
case 2626:
case 1743:
case 3041:
case 3545:
case 2456:
case 1165:
case 2221:
case 144:
case 3210:
case 2847:
case 2162:
case 77:
case 640:
case 1298:
case 3782:
case 1646:
case 366:
case 1010:
case 334:
case 1659:
case 2723:
case 2317:
case 1366:
case 1264:
case 1827:
case 42:
case 2603:
case 618:
case 2438:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750932001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,];
var gg_b = "1750932001/";

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
