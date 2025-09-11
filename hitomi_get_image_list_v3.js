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
case 2606:
case 1340:
case 1948:
case 2506:
case 1784:
case 489:
case 1765:
case 1779:
case 36:
case 2701:
case 3104:
case 529:
case 3756:
case 3996:
case 4003:
case 1826:
case 3301:
case 1011:
case 2439:
case 3367:
case 1730:
case 189:
case 1220:
case 677:
case 3003:
case 1313:
case 2026:
case 1416:
case 2811:
case 15:
case 248:
case 1104:
case 16:
case 2392:
case 3138:
case 2938:
case 2330:
case 1623:
case 3981:
case 1551:
case 389:
case 904:
case 1367:
case 46:
case 2365:
case 794:
case 1756:
case 967:
case 3011:
case 1301:
case 45:
case 1449:
case 3826:
case 3792:
case 2712:
case 1116:
case 218:
case 455:
case 1404:
case 720:
case 2054:
case 2835:
case 1793:
case 1970:
case 3060:
case 82:
case 1378:
case 3438:
case 4047:
case 1837:
case 693:
case 430:
case 3257:
case 2675:
case 130:
case 301:
case 2575:
case 3208:
case 743:
case 1677:
case 3683:
case 3312:
case 1002:
case 165:
case 516:
case 3854:
case 2045:
case 1724:
case 1149:
case 3583:
case 1577:
case 1921:
case 270:
case 2514:
case 1438:
case 3378:
case 1060:
case 2170:
case 401:
case 2847:
case 2153:
case 198:
case 3793:
case 587:
case 1845:
case 3280:
case 2255:
case 3404:
case 2802:
case 1854:
case 3002:
case 2244:
case 3234:
case 3677:
case 2496:
case 355:
case 3577:
case 2121:
case 1583:
case 3149:
case 2139:
case 242:
case 101:
case 330:
case 2037:
case 2778:
case 553:
case 4060:
case 2407:
case 396:
case 639:
case 4008:
case 3490:
case 1372:
case 3080:
case 2055:
case 3432:
case 3844:
case 1159:
case 2976:
case 3176:
case 1943:
case 3628:
case 2044:
case 3202:
case 3034:
case 581:
case 2880:
case 464:
case 1008:
case 3318:
case 2110:
case 518:
case 3910:
case 2458:
case 890:
case 90:
case 121:
case 407:
case 3563:
case 3247:
case 2674:
case 2237:
case 700:
case 1844:
case 542:
case 263:
case 2799:
case 838:
case 2325:
case 3372:
case 3866:
case 3159:
case 307:
case 1327:
case 990:
case 3260:
case 2808:
case 1663:
case 1910:
case 1318:
case 3008:
case 287:
case 1628:
case 2772:
case 4080:
case 2245:
case 512:
case 2736:
case 3746:
case 2905:
case 2787:
case 3203:
case 2226:
case 2319:
case 951:
case 3071:
case 1764:
case 3459:
case 229:
case 3662:
case 2529:
case 932:
case 3688:
case 3541:
case 1190:
case 3562:
case 3588:
case 2820:
case 2629:
case 3641:
case 1350:
case 1958:
case 3020:
case 805:
case 3336:
case 1809:
case 3211:
case 768:
case 1373:
case 3387:
case 1500:
case 1541:
case 1688:
case 1662:
case 905:
case 3785:
case 671:
case 1641:
case 4020:
case 2398:
case 2990:
case 824:
case 3190:
case 2773:
case 3132:
case 3942:
case 2932:
case 2142:
case 779:
case 3764:
case 3961:
case 2009:
case 1203:
case 3476:
case 861:
case 1433:
case 3809:
case 1336:
case 509:
case 851:
case 2364:
case 2697:
case 3500:
case 1719:
case 2158:
case 832:
case 3350:
case 645:
case 532:
case 1332:
case 2874:
case 3472:
case 2425:
case 1015:
case 848:
case 3919:
case 3863:
case 626:
case 1758:
case 1427:
case 103:
case 561:
case 2889:
case 484:
case 912:
case 3555:
case 1418:
case 2534:
case 2028:
case 1566:
case 3817:
case 2634:
case 2277:
case 184:
case 403:
case 3089:
case 1742:
case 3136:
case 2146:
case 2936:
case 1269:
case 2063:
case 1173:
case 2987:
case 3187:
case 1275:
case 4015:
case 1761:
case 3074:
case 1964:
case 63:
case 4089:
case 3427:
case 3758:
case 1828:
case 3390:
case 2198:
case 3998:
case 267:
case 1305:
case 505:
case 4074:
case 1214:
case 2657:
case 257:
case 2361:
case 1919:
case 608:
case 2557:
case 2973:
case 3173:
case 1499:
case 3269:
case 948:
case 1946:
case 1136:
case 2732:
case 3964:
case 2815:
case 3761:
case 2222:
case 3275:
case 2508:
case 812:
case 3150:
case 2185:
case 3666:
case 2283:
case 3566:
case 2790:
case 1509:
case 3710:
case 2571:
case 788:
case 1800:
case 2498:
case 2776:
case 2062:
case 1925:
case 1743:
case 77:
case 2041:
case 1206:
case 1487:
case 3473:
case 1199:
case 918:
case 650:
case 2620:
case 2829:
case 2464:
case 2095:
case 660:
case 2520:
case 2310:
case 2918:
case 3118:
case 2485:
case 981:
case 635:
case 1895:
case 590:
case 2733:
case 2972:
case 3925:
case 3172:
case 2125:
case 3206:
case 2419:
case 2223:
case 22:
case 3509:
case 2268:
case 476:
case 2282:
case 176:
case 1450:
case 602:
case 3333:
case 3436:
case 4031:
case 1841:
case 2446:
case 1862:
case 1316:
case 3006:
case 238:
case 1413:
case 1229:
case 1739:
case 1924:
case 853:
case 1178:
case 634:
case 1526:
case 1467:
case 622:
case 3297:
case 110:
case 38:
case 3868:
case 2484:
case 887:
case 2912:
case 536:
case 2094:
case 1401:
case 2479:
case 2051:
case 2603:
case 1440:
case 816:
case 2370:
case 2978:
case 3178:
case 987:
case 1851:
case 3413:
case 1006:
case 2241:
case 369:
case 2288:
case 2749:
case 3924:
case 478:
case 3739:
case 3753:
case 2295:
case 2716:
case 1112:
case 2193:
case 4006:
case 3349:
case 1823:
case 310:
case 1297:
case 3467:
case 1868:
case 372:
case 1338:
case 1140:
case 1930:
case 846:
case 224:
case 3591:
case 3654:
case 697:
case 185:
case 2869:
case 3796:
case 2560:
case 525:
case 3822:
case 2424:
case 1274:
case 1686:
case 1965:
case 2022:
case 1412:
case 1537:
case 2493:
case 2396:
case 3069:
case 3101:
case 1289:
case 340:
case 2967:
case 2083:
case 929:
case 2635:
case 1984:
case 2535:
case 1113:
case 774:
case 1956:
case 3752:
case 4069:
case 4075:
case 1822:
case 2192:
case 3992:
case 1215:
case 1796:
case 1478:
case 1691:
case 3140:
case 829:
case 2348:
case 172:
case 2217:
case 1654:
case 2381:
case 123:
case 3877:
case 946:
case 1645:
case 205:
case 2602:
case 423:
case 1545:
case 557:
case 3781:
case 2814:
case 2165:
case 3965:
case 504:
case 3637:
case 1101:
case 1069:
case 2179:
case 3979:
case 3537:
case 3856:
case 1287:
case 3169:
case 3175:
case 2975:
case 2264:
case 822:
case 179:
case 1639:
case 195:
case 873:
case 1539:
case 3983:
case 1977:
case 1553:
case 495:
case 834:
case 1884:
case 1040:
case 1114:
case 1865:
case 663:
case 1570:
case 3013:
case 1406:
case 653:
case 2801:
case 1879:
case 1670:
case 2056:
case 2084:
case 3621:
case 2840:
case 3830:
case 3639:
case 379:
case 3521:
case 1067:
case 934:
case 3539:
case 215:
case 395:
case 1169:
case 2079:
case 3287:
case 1001:
case 3236:
case 3892:
case 2703:
case 2065:
case 2092:
case 2711:
case 3865:
case 2914:
case 3114:
case 3879:
case 3406:
case 4001:
case 24:
case 158:
case 4067:
case 616:
case 168:
case 973:
case 3040:
case 2468:
case 1552:
case 2477:
case 100:
case 2760:
case 906:
case 1652:
case 3596:
case 245:
case 3299:
case 1469:
case 3335:
case 796:
case 3994:
case 3012:
case 1302:
case 2225:
case 3272:
case 2354:
case 1681:
case 3414:
case 1548:
case 1893:
case 3745:
case 1581:
case 2906:
case 2123:
case 3106:
case 21:
case 2604:
case 1227:
case 646:
case 1786:
case 3982:
case 2504:
case 2182:
case 1737:
case 3360:
case 928:
case 152:
case 3469:
case 3475:
case 3302:
case 1994:
case 1696:
case 3552:
case 754:
case 3218:
case 3347:
case 1596:
case 997:
case 131:
case 300:
case 49:
case 2386:
case 764:
case 2483:
case 629:
case 3227:
case 19:
case 431:
case 1360:
case 3078:
case 1968:
case 2747:
case 1982:
case 806:
case 4012:
case 3548:
case 721:
case 462:
case 3681:
case 1272:
case 3648:
case 577:
case 3893:
case 3995:
case 3334:
case 727:
case 2780:
case 3755:
case 1658:
case 949:
case 1489:
case 1900:
case 3018:
case 798:
case 2818:
case 609:
case 137:
case 1561:
case 3027:
case 1357:
case 244:
case 2929:
case 3129:
case 648:
case 2141:
case 2931:
case 3941:
case 2188:
case 2355:
case 3380:
case 1766:
case 3415:
case 1607:
case 2162:
case 3197:
case 612:
case 443:
case 120:
case 926:
case 4027:
case 2428:
case 2100:
case 2872:
case 3474:
case 3212:
case 580:
case 1995:
case 3099:
case 3658:
case 2366:
case 2463:
case 1755:
case 2899:
case 1131:
case 1129:
case 2025:
case 3607:
case 1415:
case 1380:
case 1988:
case 849:
case 3542:
case 1278:
case 3661:
case 83:
case 3357:
case 420:
case 143:
case 3642:
case 2417:
case 765:
case 1027:
case 3561:
case 76:
case 642:
case 1267:
case 3189:
case 494:
case 413:
case 2284:
case 1643:
case 75:
case 2128:
case 2400:
case 3928:
case 1050:
case 3174:
case 3510:
case 860:
case 3087:
case 1073:
case 2163:
case 1201:
case 3610:
case 3819:
case 2046:
case 4073:
case 2836:
case 3846:
case 2019:
case 366:
case 194:
case 113:
case 3709:
case 2495:
case 2064:
case 466:
case 1036:
case 1819:
case 1610:
case 1087:
case 1963:
case 1189:
case 3267:
case 2533:
case 3898:
case 3050:
case 2085:
case 1320:
case 3643:
case 2850:
case 2098:
case 1240:
case 2559:
case 1917:
case 313:
case 293:
case 3213:
case 1846:
case 2309:
case 950:
case 4036:
case 156:
case 1371:
case 4087:
case 2873:
case 3115:
case 2915:
case 3864:
case 690:
case 1807:
case 2328:
case 815:
case 2920:
case 3120:
case 3717:
case 2252:
case 2518:
case 1842:
case 1434:
case 2466:
case 1861:
case 772:
case 2618:
case 3171:
case 2971:
case 1315:
case 3005:
case 3763:
case 1032:
case 502:
case 740:
case 1480:
case 2248:
case 2789:
case 84:
case 1858:
case 1090:
case 1525:
case 3457:
case 3728:
case 2281:
case 1625:
case 2832:
case 2444:
case 785:
case 3861:
case 2715:
case 2296:
case 2599:
case 939:
case 3807:
case 222:
case 1389:
case 94:
case 2058:
case 2699:
case 1120:
case 273:
case 2572:
case 3090:
case 1238:
case 2007:
case 2672:
case 147:
case 638:
case 2061:
case 3480:
case 2042:
case 3032:
case 535:
case 3315:
case 3134:
case 3944:
case 2144:
case 2729:
case 3741:
case 2395:
case 1585:
case 549:
case 1033:
case 2221:
case 2239:
case 1966:
case 3762:
case 417:
case 386:
case 1397:
case 3546:
case 1420:
case 1108:
case 2636:
case 508:
case 880:
case 3619:
case 117:
case 206:
case 3519:
case 1700:
case 778:
case 2409:
case 2341:
case 3795:
case 4033:
case 1059:
case 1698:
case 2876:
case 2253:
case 3180:
case 591:
case 2980:
case 78:
case 3955:
case 2155:
case 2388:
case 1598:
case 2362:
case 3397:
case 769:
case 186:
case 1646:
case 2908:
case 845:
case 2673:
case 759:
case 2550:
case 3585:
case 661:
case 1741:
case 2859:
case 1076:
case 2166:
case 1788:
case 3033:
case 4076:
case 3059:
case 3698:
case 2833:
case 1331:
case 1216:
case 3598:
case 1955:
case 710:
case 2797:
case 81:
case 1519:
case 3157:
case 2957:
case 297:
case 317:
case 871:
case 37:
case 291:
case 944:
case 877:
case 683:
case 1147:
case 1937:
case 1579:
case 2351:
case 1276:
case 4016:
case 2243:
case 2567:
case 2394:
case 2145:
case 2935:
case 3135:
case 1102:
case 1584:
case 2154:
case 667:
case 3954:
case 3991:
case 2191:
case 657:
case 3259:
case 776:
case 2426:
case 2323:
case 1016:
case 2513:
case 23:
case 3160:
case 2960:
case 3656:
case 2021:
case 1233:
case 188:
case 3049:
case 3276:
case 0:
case 2902:
case 3584:
case 3679:
case 2210:
case 17:
case 3579:
case 2947:
case 2137:
case 1768:
case 3937:
case 1782:
case 226:
case 411:
case 3592:
case 844:
case 1160:
case 2070:
case 47:
case 1751:
case 2640:
case 2849:
case 3839:
case 488:
case 1403:
case 1259:
case 1794:
case 2053:
case 2096:
case 2804:
case 2322:
case 1435:
case 475:
case 1593:
case 2612:
case 2383:
case 2207:
case 62:
case 1624:
case 382:
case 175:
case 3290:
case 1524:
case 1038:
case 3783:
case 1314:
case 2242:
case 1852:
case 3722:
case 2775:
case 3693:
case 914:
case 341:
case 482:
case 2377:
case 235:
case 1447:
case 3593:
case 1369:
case 250:
case 2911:
case 2714:
case 2445:
case 3435:
case 2052:
case 534:
case 260:
case 1402:
case 2454:
case 3205:
case 522:
case 1004:
case 3314:
case 2678:
case 3926:
case 573:
case 2081:
case 219:
case 3038:
case 3777:
case 3524:
case 375:
case 704:
case 533:
case 3052:
case 3911:
case 2111:
case 350:
case 1096:
case 8:
case 2593:
case 767:
case 913:
case 994:
case 2881:
case 1258:
case 676:
case 2848:
case 275:
case 2038:
case 2777:
case 3048:
case 1207:
case 319:
case 2624:
case 402:
case 866:
case 1775:
case 2103:
case 3903:
case 3678:
case 1242:
case 2314:
case 783:
case 2205:
case 1769:
case 3454:
case 4081:
case 3612:
case 302:
case 1838:
case 3512:
case 1445:
case 1052:
case 547:
case 2375:
case 3322:
case 160:
case 2402:
case 956:
case 1911:
case 1678:
case 1126:
case 3775:
case 450:
case 725:
case 1578:
case 2232:
case 2004:
case 460:
case 2783:
case 894:
case 3207:
case 435:
case 191:
case 3186:
case 1501:
case 2665:
case 2986:
case 2937:
case 3947:
case 449:
case 1601:
case 2565:
case 2870:
case 820:
case 2679:
case 1394:
case 72:
case 3902:
case 2584:
case 2853:
case 2049:
case 3816:
case 408:
case 1567:
case 2684:
case 3053:
case 1426:
case 2821:
case 2839:
case 3540:
case 1613:
case 843:
case 1960:
case 1513:
case 13:
case 149:
case 326:
case 2692:
case 1902:
case 3667:
case 3706:
case 2135:
case 3145:
case 2233:
case 3567:
case 3243:
case 288:
case 2411:
case 4053:
case 1947:
case 2782:
case 3501:
case 211:
case 943:
case 391:
case 4070:
case 3601:
case 3368:
case 3960:
case 2160:
case 3613:
case 349:
case 920:
case 33:
case 1849:
case 1640:
case 4039:
case 308:
case 3426:
case 3191:
case 2991:
case 1540:
case 2751:
case 3154:
case 586:
case 1221:
case 2033:
case 3043:
case 3166:
case 3650:
case 3859:
case 1729:
case 1934:
case 2585:
case 3673:
case 1687:
case 2564:
case 1636:
case 3300:
case 1010:
case 397:
case 2700:
case 623:
case 672:
case 3797:
case 1155:
case 790:
case 1388:
case 1341:
case 2843:
case 2059:
case 2471:
case 1876:
case 2646:
case 3010:
case 3636:
case 3687:
case 1673:
case 3536:
case 2546:
case 99:
case 286:
case 2762:
case 1650:
case 2076:
case 1166:
case 3239:
case 428:
case 1043:
case 1550:
case 3395:
case 3731:
case 2741:
case 70:
case 3729:
case 2134:
case 3362:
case 3388:
case 2955:
case 3980:
case 511:
case 3253:
case 128:
case 2331:
case 2795:
case 3341:
case 931:
case 685:
case 1797:
case 588:
case 2619:
case 3270:
case 1328:
case 274:
case 373:
case 1920:
case 3058:
case 3890:
case 68:
case 322:
case 1363:
case 3296:
case 3715:
case 1466:
case 599:
case 1518:
case 2434:
case 705:
case 2315:
case 3455:
case 3042:
case 2204:
case 1971:
case 334:
case 868:
case 1317:
case 1789:
case 979:
case 2090:
case 858:
case 2525:
case 3618:
case 4061:
case 1715:
case 1296:
case 3363:
case 582:
case 2374:
case 1699:
case 1058:
case 2408:
case 2120:
case 1599:
case 4007:
case 122:
case 879:
case 3281:
case 422:
case 761:
case 3248:
case 732:
case 669:
case 3774:
case 2171:
case 1284:
case 1400:
case 1128:
case 3085:
case 1676:
case 2898:
case 2050:
case 3533:
case 2543:
case 601:
case 1989:
case 1576:
case 1279:
case 1046:
case 2201:
case 1771:
case 709:
case 1974:
case 3064:
case 1265:
case 2864:
case 3462:
case 1292:
case 3915:
case 2115:
case 3488:
case 579:
case 698:
case 2213:
case 314:
case 213:
case 1720:
case 1230:
case 3850:
case 3098:
case 2885:
case 2036:
case 568:
case 2610:
case 2819:
case 3046:
case 3163:
case 2087:
case 3279:
case 2510:
case 3265:
case 1495:
case 2:
case 1064:
case 665:
case 1085:
case 2928:
case 3400:
case 1633:
case 3576:
case 414:
case 493:
case 2189:
case 982:
case 1559:
case 3117:
case 2917:
case 875:
case 1098:
case 2240:
case 3230:
case 1488:
case 712:
case 266:
case 3292:
case 4064:
case 1462:
case 2846:
case 1309:
case 1441:
case 3836:
case 3887:
case 1256:
case 1873:
case 1780:
case 3463:
case 1293:
case 3366:
case 2658:
case 2212:
case 3872:
case 2558:
case 888:
case 377:
case 811:
case 2900:
case 3428:
case 3757:
case 87:
case 2197:
case 2561:
case 237:
case 144:
case 3532:
case 2542:
case 500:
case 66:
case 742:
case 2766:
case 1734:
case 1931:
case 3899:
case 2507:
case 177:
case 689:
case 3827:
case 3293:
case 1872:
case 3344:
case 3195:
case 2995:
case 59:
case 3162:
case 2415:
case 2380:
case 3188:
case 1690:
case 1899:
case 2941:
case 3141:
case 3931:
case 2744:
case 3734:
case 243:
case 1632:
case 2027:
case 3605:
case 97:
case 3818:
case 552:
case 2278:
case 3505:
case 763:
case 3386:
case 41:
case 2347:
case 2218:
case 471:
case 2552:
case 537:
case 2302:
case 3422:
case 2824:
case 3093:
case 1123:
case 2581:
case 3702:
case 2648:
case 3024:
case 2681:
case 2548:
case 1812:
case 2786:
case 171:
case 1504:
case 1182:
case 1168:
case 2078:
case 11:
case 2227:
case 1422:
case 4024:
case 543:
case 2012:
case 2994:
case 2335:
case 2791:
case 3345:
case 252:
case 2951:
case 1093:
case 231:
case 3477:
case 1483:
case 3168:
case 2968:
case 3182:
case 2982:
case 371:
case 3604:
case 180:
case 31:
case 1638:
case 1702:
case 2106:
case 2923:
case 3391:
case 3735:
case 2745:
case 4093:
case 2414:
case 1538:
case 1024:
case 3065:
case 594:
case 513:
case 2726:
case 746:
case 2236:
case 3246:
case 1813:
case 3451:
case 4056:
case 2287:
case 315:
case 933:
case 3549:
case 2539:
case 3177:
case 1183:
case 2521:
case 1285:
case 279:
case 1298:
case 3482:
case 2884:
case 3616:
case 847:
case 2040:
case 3030:
case 1867:
case 2303:
case 3326:
case 3219:
case 3423:
case 3711:
case 3092:
case 3183:
case 2983:
case 1177:
case 2067:
case 621:
case 947:
case 115:
case 1840:
case 3285:
case 2250:
case 4092:
case 1703:
case 3975:
case 2922:
case 1065:
case 2175:
case 3122:
case 1079:
case 2169:
case 2273:
case 2001:
case 1246:
case 4079:
case 654:
case 1326:
case 664:
case 1914:
case 1482:
case 4084:
case 3298:
case 1468:
case 14:
case 3867:
case 415:
case 607:
case 2877:
case 4083:
case 285:
case 3217:
case 3130:
case 1560:
case 2992:
case 4022:
case 461:
case 1660:
case 1869:
case 2752:
case 1156:
case 1913:
case 773:
case 451:
case 3263:
case 1396:
case 2586:
case 1704:
case 2274:
case 3165:
case 161:
case 734:
case 2781:
case 3184:
case 3502:
case 1535:
case 424:
case 1083:
case 132:
case 305:
case 686:
case 3875:
case 3424:
case 2304:
case 2113:
case 2956:
case 3156:
case 2591:
case 2654:
case 1381:
case 324:
case 2883:
case 4077:
case 2478:
case 2691:
case 2554:
case 1348:
case 2545:
case 1502:
case 1184:
case 1228:
case 3635:
case 1738:
case 2167:
case 332:
case 3083:
case 3967:
case 240:
case 3704:
case 3901:
case 2101:
case 1179:
case 2069:
case 1263:
case 1814:
case 361:
case 3022:
case 1352:
case 1647:
case 2924:
case 2739:
case 1492:
case 3262:
case 2316:
case 1023:
case 138:
case 2231:
case 2229:
case 4051:
case 3456:
case 3353:
case 10:
case 3503:
case 1430:
case 896:
case 1082:
case 3603:
case 728:
case 3611:
case 907:
case 2770:
case 210:
case 3511:
case 438:
case 2401:
case 1806:
case 2349:
case 1479:
case 2993:
case 1912:
case 1465:
case 2753:
case 1094:
case 490:
case 3430:
case 807:
case 1978:
case 854:
case 1288:
case 1124:
case 1456:
case 3023:
case 2006:
case 1193:
case 3806:
case 1339:
case 1321:
case 3094:
case 706:
case 278:
case 3465:
case 1716:
case 2112:
case 1611:
case 2868:
case 190:
case 1511:
case 28:
case 3282:
case 827:
case 1498:
case 3268:
case 682:
case 3897:
case 2509:
case 930:
case 1927:
case 3419:
case 2206:
case 898:
case 1776:
case 3125:
case 2743:
case 3733:
case 510:
case 4095:
case 3294:
case 4062:
case 3251:
case 3446:
case 1831:
case 2097:
case 436:
case 569:
case 1310:
case 3000:
case 1918:
case 801:
case 1419:
case 2029:
case 791:
case 1125:
case 3498:
case 3671:
case 1282:
case 336:
case 2127:
case 699:
case 12:
case 1897:
case 927:
case 3485:
case 2450:
case 2118:
case 3918:
case 2888:
case 3520:
case 3464:
case 1759:
case 1294:
case 749:
case 3620:
case 3831:
case 998:
case 2841:
case 1251:
case 1119:
case 3361:
case 3342:
case 1874:
case 367:
case 2015:
case 85:
case 735:
case 2998:
case 3198:
case 2390:
case 750:
case 425:
case 989:
case 1889:
case 1680:
case 3790:
case 2566:
case 1634:
case 284:
case 611:
case 383:
case 2985:
case 3358:
case 3185:
case 892:
case 2150:
case 3950:
case 2418:
case 3508:
case 2761:
case 3164:
case 2964:
case 2742:
case 3608:
case 3732:
case 1936:
case 688:
case 2269:
case 1705:
case 1987:
case 3973:
case 2555:
case 2828:
case 1198:
case 2655:
case 3680:
case 483:
case 3017:
case 1307:
case 157:
case 1361:
case 2863:
case 3119:
case 2305:
case 3874:
case 2214:
case 1657:
case 702:
case 540:
case 2074:
case 1815:
case 523:
case 1508:
case 2187:
case 3987:
case 2499:
case 3705:
case 457:
case 3146:
case 3936:
case 95:
case 2136:
case 2089:
case 183:
case 1283:
case 3634:
case 3277:
case 325:
case 2817:
case 1790:
case 889:
case 2544:
case 1950:
case 1319:
case 2961:
case 3161:
case 2764:
case 1905:
case 3773:
case 1787:
case 2190:
case 823:
case 3398:
case 1629:
case 1820:
case 346:
case 129:
case 3107:
case 3750:
case 2907:
case 872:
case 1529:
case 985:
case 2798:
case 631:
case 2958:
case 840:
case 3158:
case 3410:
case 662:
case 739:
case 2600:
case 1346:
case 2373:
case 3629:
case 2588:
case 1398:
case 2541:
case 940:
case 2688:
case 3529:
case 2071:
case 1161:
case 3787:
case 1773:
case 1142:
case 1932:
case 592:
case 1697:
case 2387:
case 2433:
case 1597:
case 3346:
case 2336:
case 2695:
case 923:
case 446:
case 2020:
case 55:
case 2595:
case 1158:
case 1385:
case 555:
case 910:
case 3615:
case 116:
case 2159:
case 1461:
case 3291:
case 353:
case 3325:
case 3254:
case 2405:
case 264:
case 530:
case 1055:
case 1442:
case 4044:
case 3245:
case 969:
case 780:
case 1044:
case 1976:
case 3066:
case 3933:
case 3857:
case 1237:
case 1110:
case 869:
case 1291:
case 1959:
case 2844:
case 3055:
case 859:
case 163:
case 978:
case 1254:
case 1799:
case 1808:
case 1615:
case 296:
case 3407:
case 3718:
case 695:
case 187:
case 3286:
case 3574:
case 679:
case 3458:
case 3727:
case 2910:
case 463:
case 2034:
case 2855:
case 3044:
case 71:
case 1245:
case 3589:
case 453:
case 771:
case 1933:
case 1143:
case 1772:
case 1066:
case 2176:
case 2404:
case 2280:
case 521:
case 666:
case 1835:
case 1054:
case 656:
case 1091:
case 3847:
case 2837:
case 3614:
case 2886:
case 181:
case 2970:
case 1448:
case 3514:
case 1575:
case 3037:
case 1569:
case 230:
case 481:
case 342:
case 3949:
case 418:
case 3139:
case 2939:
case 2577:
case 255:
case 3393:
case 6:
case 2002:
case 1452:
case 507:
case 694:
case 381:
case 613:
case 1614:
case 4037:
case 1847:
case 227:
case 1514:
case 2438:
case 2060:
case 976:
case 3835:
case 2845:
case 1324:
case 3091:
case 1916:
case 318:
case 3712:
case 3266:
case 2583:
case 1121:
case 1949:
case 1139:
case 3045:
case 2035:
case 3452:
case 2208:
case 3669:
case 1086:
case 3675:
case 2622:
case 3569:
case 1778:
case 643:
case 2981:
case 3181:
case 2784:
case 412:
case 309:
case 3330:
case 3148:
case 2138:
case 1767:
case 3392:
case 1904:
case 1356:
case 348:
case 3811:
case 3026:
case 2003:
case 1196:
case 3379:
case 1421:
case 2011:
case 1439:
case 2952:
case 3152:
case 793:
case 1713:
case 3384:
case 2220:
case 2730:
case 620:
case 3740:
case 289:
case 2104:
case 26:
case 3701:
case 2313:
case 2682:
case 1026:
case 1811:
case 25:
case 3209:
case 2416:
case 2668:
case 3356:
case 637:
case 1181:
case 803:
case 3767:
case 1148:
case 1938:
case 2623:
case 1330:
case 884:
case 2551:
case 409:
case 2367:
case 292:
case 3439:
case 2449:
case 4026:
case 3421:
case 1803:
case 2996:
case 3196:
case 1365:
case 2756:
case 1152:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757574001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,];
var gg_b = "1757574001/";

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
