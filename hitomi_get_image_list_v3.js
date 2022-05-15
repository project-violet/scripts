// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 4062:
case 4074:
case 3309:
case 2393:
case 973:
case 1003:
case 114:
case 1898:
case 3065:
case 2458:
case 1652:
case 2008:
case 2816:
case 1891:
case 4017:
case 1038:
case 2500:
case 1333:
case 2370:
case 4046:
case 984:
case 1677:
case 1597:
case 3634:
case 1404:
case 2321:
case 3365:
case 4021:
case 1847:
case 635:
case 1660:
case 140:
case 2524:
case 3000:
case 1558:
case 2015:
case 2775:
case 1688:
case 2446:
case 2443:
case 1778:
case 3911:
case 1010:
case 1468:
case 3273:
case 2912:
case 157:
case 1786:
case 1276:
case 2606:
case 3347:
case 2657:
case 3179:
case 1994:
case 1212:
case 643:
case 1831:
case 3741:
case 3201:
case 2115:
case 3416:
case 217:
case 667:
case 1779:
case 1362:
case 3811:
case 1064:
case 3051:
case 651:
case 401:
case 2652:
case 4081:
case 3916:
case 2782:
case 4029:
case 1735:
case 1967:
case 2113:
case 1730:
case 1642:
case 2042:
case 616:
case 2878:
case 951:
case 484:
case 3010:
case 823:
case 2480:
case 346:
case 1739:
case 3428:
case 3402:
case 487:
case 3394:
case 3580:
case 544:
case 3172:
case 448:
case 3642:
case 2518:
case 276:
case 211:
case 1361:
case 2185:
case 3685:
case 966:
case 1795:
case 3754:
case 2953:
case 162:
case 915:
case 2876:
case 2106:
case 1819:
case 2640:
case 3049:
case 1983:
case 2465:
case 2248:
case 1196:
case 2043:
case 1546:
case 3791:
case 1574:
case 1614:
case 1191:
case 1282:
case 2921:
case 1603:
case 1309:
case 2853:
case 2799:
case 3444:
case 3312:
case 1572:
case 1408:
case 393:
case 3669:
case 1575:
case 169:
case 3870:
case 1234:
case 2895:
case 599:
case 208:
case 389:
case 948:
case 3731:
case 2993:
case 4051:
case 136:
case 2054:
case 345:
case 2612:
case 1175:
case 3832:
case 35:
case 315:
case 861:
case 1960:
case 983:
case 3097:
case 880:
case 1892:
case 58:
case 2977:
case 2731:
case 273:
case 3084:
case 1246:
case 2011:
case 2758:
case 137:
case 585:
case 1993:
case 198:
case 1920:
case 1543:
case 577:
case 1630:
case 1486:
case 3369:
case 93:
case 1529:
case 3388:
case 2302:
case 3632:
case 1633:
case 636:
case 1986:
case 807:
case 160:
case 606:
case 2530:
case 2085:
case 994:
case 610:
case 1855:
case 2002:
case 2937:
case 243:
case 1881:
case 1491:
case 505:
case 2128:
case 1620:
case 503:
case 3930:
case 3641:
case 2517:
case 1472:
case 2835:
case 3525:
case 834:
case 2528:
case 4058:
case 2391:
case 1961:
case 3390:
case 3217:
case 3859:
case 1279:
case 3938:
case 1214:
case 2286:
case 2701:
case 2583:
case 3359:
case 4034:
case 3508:
case 928:
case 2507:
case 1297:
case 1932:
case 2139:
case 1757:
case 199:
case 2436:
case 553:
case 3401:
case 2808:
case 1532:
case 782:
case 2533:
case 1938:
case 3707:
case 2460:
case 2421:
case 692:
case 1511:
case 314:
case 3784:
case 2131:
case 755:
case 3847:
case 2705:
case 1336:
case 3614:
case 2604:
case 3403:
case 3400:
case 842:
case 1049:
case 1944:
case 2040:
case 188:
case 1045:
case 2642:
case 1818:
case 1111:
case 352:
case 2469:
case 301:
case 1750:
case 3405:
case 461:
case 4056:
case 3289:
case 2471:
case 4075:
case 106:
case 3856:
case 4067:
case 2497:
case 2061:
case 3746:
case 2991:
case 2866:
case 967:
case 219:
case 3184:
case 2439:
case 2470:
case 2127:
case 1183:
case 947:
case 832:
case 1675:
case 3276:
case 3670:
case 1086:
case 1285:
case 132:
case 1659:
case 598:
case 3059:
case 1694:
case 1363:
case 3833:
case 3534:
case 431:
case 2630:
case 1758:
case 686:
case 2722:
case 4026:
case 2401:
case 682:
case 4086:
case 1790:
case 648:
case 2916:
case 641:
case 1176:
case 3639:
case 3539:
case 851:
case 3139:
case 1071:
case 2402:
case 3020:
case 1341:
case 3974:
case 79:
case 3805:
case 796:
case 506:
case 1258:
case 1626:
case 3168:
case 3631:
case 3785:
case 3101:
case 2656:
case 1535:
case 3360:
case 3080:
case 1448:
case 1213:
case 17:
case 2761:
case 145:
case 1076:
case 695:
case 2859:
case 3899:
case 2975:
case 1075:
case 2223:
case 3077:
case 1440:
case 2961:
case 195:
case 3481:
case 2141:
case 50:
case 1940:
case 1708:
case 3002:
case 3975:
case 2675:
case 2966:
case 2710:
case 3284:
case 3812:
case 2611:
case 4065:
case 3404:
case 1218:
case 98:
case 4016:
case 317:
case 3454:
case 1051:
case 3131:
case 3029:
case 2762:
case 3577:
case 1327:
case 3560:
case 688:
case 3354:
case 1689:
case 1740:
case 568:
case 1399:
case 2898:
case 48:
case 3894:
case 1769:
case 1929:
case 2558:
case 3934:
case 3903:
case 3590:
case 2754:
case 286:
case 1883:
case 747:
case 1253:
case 196:
case 2512:
case 1747:
case 3095:
case 2000:
case 342:
case 2949:
case 1760:
case 1508:
case 1267:
case 2158:
case 1890:
case 343:
case 2714:
case 1863:
case 2855:
case 938:
case 940:
case 1469:
case 3086:
case 1381:
case 1915:
case 2269:
case 3583:
case 3091:
case 2313:
case 2723:
case 3675:
case 3751:
case 1423:
case 2118:
case 210:
case 3387:
case 980:
case 249:
case 986:
case 3920:
case 2579:
case 407:
case 2463:
case 3819:
case 707:
case 2760:
case 924:
case 2681:
case 2145:
case 1092:
case 166:
case 1108:
case 73:
case 3728:
case 908:
case 580:
case 1916:
case 2828:
case 2986:
case 2327:
case 1458:
case 1172:
case 2742:
case 3554:
case 1135:
case 458:
case 2847:
case 809:
case 2872:
case 1180:
case 3321:
case 2174:
case 2686:
case 2254:
case 786:
case 1811:
case 921:
case 3988:
case 3318:
case 3782:
case 3809:
case 2607:
case 1593:
case 3453:
case 2472:
case 2920:
case 62:
case 1124:
case 509:
case 2455:
case 603:
case 3544:
case 1569:
case 1775:
case 113:
case 657:
case 1796:
case 1383:
case 2615:
case 3665:
case 2374:
case 2481:
case 3147:
case 452:
case 1365:
case 3214:
case 64:
case 3290:
case 3939:
case 1189:
case 383:
case 2362:
case 3541:
case 1579:
case 473:
case 2815:
case 3893:
case 255:
case 623:
case 3187:
case 2751:
case 3996:
case 3165:
case 4044:
case 1078:
case 1679:
case 3623:
case 59:
case 3866:
case 810:
case 182:
case 761:
case 459:
case 2812:
case 3579:
case 997:
case 1080:
case 2259:
case 39:
case 573:
case 2553:
case 3396:
case 2069:
case 2073:
case 3343:
case 28:
case 204:
case 2144:
case 1022:
case 119:
case 1032:
case 3885:
case 1392:
case 3613:
case 964:
case 1388:
case 2697:
case 1250:
case 793:
case 3725:
case 1684:
case 3067:
case 1905:
case 3545:
case 2508:
case 2189:
case 5:
case 1963:
case 2515:
case 3881:
case 1239:
case 2033:
case 2050:
case 3465:
case 546:
case 2934:
case 3262:
case 1155:
case 1206:
case 2039:
case 469:
case 3874:
case 2226:
case 206:
case 3162:
case 1972:
case 3413:
case 2936:
case 3245:
case 1264:
case 1232:
case 3727:
case 819:
case 2543:
case 359:
case 1066:
case 2017:
case 3621:
case 2289:
case 1628:
case 2307:
case 3821:
case 2090:
case 156:
case 1776:
case 1606:
case 2044:
case 3762:
case 2707:
case 3022:
case 3154:
case 2390:
case 261:
case 2134:
case 170:
case 715:
case 3186:
case 3151:
case 3292:
case 2504:
case 2766:
case 75:
case 1340:
case 541:
case 871:
case 3820:
case 1954:
case 1496:
case 462:
case 613:
case 3361:
case 1504:
case 1759:
case 1600:
case 2638:
case 4024:
case 1671:
case 1692:
case 1829:
case 2756:
case 324:
case 340:
case 1524:
case 3009:
case 158:
case 4025:
case 4085:
case 1115:
case 9:
case 698:
case 1573:
case 2856:
case 3744:
case 3384:
case 2492:
case 3690:
case 2341:
case 865:
case 977:
case 2848:
case 413:
case 3842:
case 844:
case 1806:
case 2461:
case 899:
case 1550:
case 1749:
case 797:
case 3777:
case 1450:
case 2548:
case 3657:
case 1379:
case 666:
case 524:
case 2874:
case 3200:
case 1640:
case 2732:
case 538:
case 3628:
case 3441:
case 3969:
case 2437:
case 1287:
case 7:
case 881:
case 806:
case 1990:
case 749:
case 52:
case 2407:
case 476:
case 2098:
case 1697:
case 1070:
case 949:
case 1061:
case 1909:
case 679:
case 898:
case 2924:
case 3235:
case 1069:
case 905:
case 674:
case 2413:
case 560:
case 3676:
case 1118:
case 2932:
case 3439:
case 1571:
case 3718:
case 2062:
case 3799:
case 3019:
case 130:
case 780:
case 2529:
case 3203:
case 3802:
case 60:
case 1425:
case 2016:
case 2186:
case 1415:
case 1899:
case 3228:
case 193:
case 1751:
case 2886:
case 937:
case 2651:
case 1318:
case 2486:
case 2334:
case 3295:
case 3215:
case 1523:
case 2120:
case 427:
case 2695:
case 3411:
case 4055:
case 1400:
case 464:
case 2959:
case 2365:
case 354:
case 184:
case 3027:
case 3331:
case 377:
case 2099:
case 3712:
case 2534:
case 3293:
case 1971:
case 2177:
case 1460:
case 3174:
case 3878:
case 3432:
case 2565:
case 2105:
case 3353:
case 1622:
case 571:
case 2734:
case 3997:
case 3702:
case 723:
case 2263:
case 2034:
case 2603:
case 533:
case 3691:
case 3674:
case 1866:
case 684:
case 1673:
case 917:
case 960:
case 2796:
case 2375:
case 91:
case 1085:
case 760:
case 153:
case 722:
case 1420:
case 778:
case 2594:
case 1772:
case 1945:
case 3335:
case 3313:
case 3890:
case 2677:
case 1199:
case 27:
case 31:
case 520:
case 3793:
case 1146:
case 3977:
case 1874:
case 3204:
case 1649:
case 1031:
case 1678:
case 4057:
case 1142:
case 3616:
case 1668:
case 3208:
case 2552:
case 3928:
case 645:
case 3844:
case 3489:
case 3459:
case 1464:
case 3956:
case 1768:
case 2122:
case 627:
case 2955:
case 2957:
case 2891:
case 1583:
case 3940:
case 1836:
case 1188:
case 3533:
case 2234:
case 3017:
case 1030:
case 3473:
case 3739:
case 1029:
case 1088:
case 26:
case 3593:
case 1937:
case 2587:
case 629:
case 2814:
case 148:
case 2379:
case 1910:
case 341:
case 3346:
case 38:
case 1936:
case 3649:
case 4011:
case 1205:
case 3145:
case 652:
case 411:
case 3612:
case 3260:
case 1763:
case 2143:
case 2820:
case 1027:
case 2671:
case 795:
case 3442:
case 4040:
case 2592:
case 2894:
case 676:
case 2083:
case 4077:
case 2358:
case 1099:
case 754:
case 3334:
case 1226:
case 3301:
case 12:
case 1691:
case 1453:
case 3003:
case 576:
case 743:
case 1519:
case 590:
case 445:
case 2058:
case 3653:
case 1452:
case 2372:
case 1734:
case 2183:
case 3373:
case 2198:
case 1203:
case 1437:
case 2729:
case 1020:
case 3944:
case 2988:
case 2257:
case 265:
case 3177:
case 2542:
case 1451:
case 1313:
case 3254:
case 1928:
case 3056:
case 3722:
case 604:
case 2037:
case 565:
case 1012:
case 2048:
case 1576:
case 2314:
case 1812:
case 4071:
case 2077:
case 3973:
case 1109:
case 2836:
case 1215:
case 758:
case 742:
case 2457:
case 3875:
case 697:
case 1296:
case 3381:
case 3236:
case 2956:
case 94:
case 3647:
case 104:
case 4022:
case 3232:
case 1459:
case 1587:
case 3755:
case 391:
case 2336:
case 2527:
case 2546:
case 732:
case 1467:
case 269:
case 1784:
case 517:
case 1988:
case 3967:
case 2218:
case 120:
case 2070:
case 2733:
case 690:
case 3706:
case 63:
case 4072:
case 1608:
case 3664:
case 3517:
case 4073:
case 3133:
case 3171:
case 1319:
case 319:
case 1746:
case 2773:
case 3827:
case 3563:
case 1002:
case 3409:
case 1422:
case 2547:
case 3689:
case 1441:
case 1876:
case 86:
case 1715:
case 2491:
case 1650:
case 2685:
case 944:
case 3492:
case 718:
case 2994:
case 2897:
case 1901:
case 3800:
case 3808:
case 1328:
case 72:
case 3836:
case 320:
case 3272:
case 3763:
case 588:
case 1412:
case 344:
case 3013:
case 3919:
case 1335:
case 3633:
case 3282:
case 3034:
case 1517:
case 2888:
case 3966:
case 3568:
case 1121:
case 2009:
case 103:
case 661:
case 2623:
case 1023:
case 3543:
case 549:
case 408:
case 385:
case 3823:
case 2952:
case 812:
case 2736:
case 700:
case 177:
case 1147:
case 3035:
case 1082:
case 833:
case 2178:
case 1888:
case 1403:
case 2030:
case 69:
case 562:
case 67:
case 3660:
case 825:
case 3246:
case 3167:
case 242:
case 135:
case 704:
case 2595:
case 2452:
case 1884:
case 1816:
case 163:
case 1343:
case 925:
case 3700:
case 957:
case 82:
case 716:
case 2021:
case 3750:
case 1771:
case 2783:
case 4014:
case 215:
case 3096:
case 3243:
case 334:
case 3873:
case 4068:
case 349:
case 1590:
case 3391:
case 1632:
case 2477:
case 2969:
case 801:
case 2380:
case 2778:
case 1857:
case 292:
case 1958:
case 117:
case 3098:
case 422:
case 2125:
case 3830:
case 2998:
case 1048:
case 2967:
case 1533:
case 669:
case 350:
case 1968:
case 2209:
case 3814:
case 2293:
case 2473:
case 2084:
case 1471:
case 175:
case 3591:
case 515:
case 3959:
case 390:
case 3796:
case 1238:
case 1798:
case 3806:
case 2382:
case 3180:
case 1662:
case 197:
case 313:
case 3037:
case 2285:
case 3570:
case 2237:
case 1040:
case 637:
case 3503:
case 2238:
case 2526:
case 1385:
case 2149:
case 244:
case 1368:
case 2680:
case 2055:
case 216:
case 1849:
case 3945:
case 2654:
case 1406:
case 1122:
case 2188:
case 586:
case 2444:
case 3824:
case 1465:
case 2648:
case 15:
case 3196:
case 1084:
case 3795:
case 358:
case 2022:
case 1216:
case 298:
case 2187:
case 2581:
case 1079:
case 2396:
case 61:
case 3682:
case 624:
case 2168:
case 482:
case 1615:
case 1347:
case 3889:
case 3434:
case 1509:
case 417:
case 3378:
case 2768:
case 1470:
case 3536:
case 863:
case 626:
case 602:
case 2540:
case 159:
case 3559:
case 1773:
case 1996:
case 3296:
case 1056:
case 2101:
case 3510:
case 4069:
case 1895:
case 2181:
case 1154:
case 3211:
case 3261:
case 2095:
case 4027:
case 2166:
case 297:
case 2091:
case 1493:
case 1672:
case 1314:
case 2597:
case 2525:
case 1186:
case 77:
case 1902:
case 1840:
case 2858:
case 3767:
case 721:
case 1094:
case 2922:
case 1610:
case 1081:
case 3054:
case 2261:
case 1242:
case 3463:
case 1947:
case 3701:
case 3018:
case 3980:
case 3527:
case 1526:
case 2755:
case 152:
case 1658:
case 435:
case 1710:
case 1484:
case 563:
case 375:
case 3515:
case 2179:
case 768:
case 3971:
case 1326:
case 3775:
case 3872:
case 3338:
case 773:
case 909:
case 903:
case 1834:
case 3776:
case 1862:
case 3166:
case 268:
case 991:
case 2175:
case 537:
case 2663:
case 186:
case 2031:
case 3532:
case 3987:
case 2474:
case 3898:
case 2325:
case 972:
case 2822:
case 2893:
case 3526:
case 656:
case 2641:
case 3994:
case 95:
case 882:
case 2182:
case 3646:
case 2984:
case 1865:
case 1754:
case 3960:
case 2348:
case 2980:
case 892:
case 1637:
case 3995:
case 1500:
case 2644:
case 3121:
case 618:
case 2792:
case 4089:
case 56:
case 2093:
case 650:
case 931:
case 2911:
case 2810:
case 528:
case 223:
case 2824:
case 497:
case 926:
case 969:
case 3048:
case 3480:
case 1184:
case 1917:
case 1534:
case 424:
case 3264:
case 3578:
case 2669:
case 3226:
case 2849:
case 4095:
case 3043:
case 3656:
case 2368:
case 3355:
case 896:
case 252:
case 1581:
case 3818:
case 3506:
case 2621:
case 935:
case 3307:
case 278:
case 428:
case 633:
case 3477:
case 279:
case 3932:
case 3326:
case 2006:
case 381:
case 1375:
case 2371:
case 2397:
case 3662:
case 2340:
case 3770:
case 649:
case 25:
case 1767:
case 1923:
case 1132:
case 1017:
case 3495:
case 1494:
case 1926:
case 379:
case 3249:
case 630:
case 670:
case 1320:
case 4031:
case 1877:
case 1473:
case 3349:
case 493:
case 329:
case 769:
case 147:
case 378:
case 1853:
case 683:
case 1209:
case 2683:
case 3743:
case 719:
case 3717:
case 3715:
case 1004:
case 1:
case 1266:
case 3252:
case 3437:
case 607:
case 416:
case 950:
case 1173:
case 3248:
case 3535:
case 2588:
case 1683:
case 2112:
case 3021:
case 3189:
case 1799:
case 2917:
case 2674:
case 581:
case 3466:
case 712:
case 3843:
case 3241:
case 789:
case 574:
case 3464:
case 1586:
case 2279:
case 2162:
case 2933:
case 2418:
case 625:
case 2046:
case 325:
case 213:
case 3440:
case 1087:
case 1889:
case 3315:
case 2690:
case 2931:
case 640:
case 3542:
case 2426:
case 816:
case 1255:
case 2305:
case 1067:
case 4064:
case 4013:
case 2035:
case 3594:
case 300:
case 115:
case 632:
case 3585:
case 3123:
case 3479:
case 2948:
case 554:
case 2569:
case 1000:
case 600:
case 3209:
case 3828:
case 3697:
case 1248:
case 2879:
case 2052:
case 1315:
case 2851:
case 864:
case 1665:
case 111:
case 1488:
case 432:
case 3352:
case 3124:
case 2273:
case 3950:
case 2887:
case 958:
case 2764:
case 2841:
case 2939:
case 556:
case 3240:
case 990:
case 3074:
case 3699:
case 579:
case 1163:
case 1372:
case 3499:
case 1219:
case 787:
case 1342:
case 3679:
case 3687:
case 1332:
case 2335:
case 1682:
case 3951:
case 1162:
case 826:
case 134:
case 1939:
case 2538:
case 453:
case 1912:
case 3414:
case 167:
case 3981:
case 3850:
case 1882:
case 3142:
case 4015:
case 2692:
case 3399:
case 729:
case 2902:
case 3169:
case 1429:
case 2974:
case 1609:
case 3933:
case 3522:
case 1373:
case 1271:
case 3195:
case 3497:
case 2217:
case 3358:
case 191:
case 535:
case 22:
case 1230:
case 3071:
case 2342:
case 1194:
case 2454:
case 3305:
case 3829:
case 2003:
case 558:
case 3901:
case 2245:
case 2284:
case 1552:
case 2409:
case 2709:
case 1541:
case 1841:
case 1913:
case 3523:
case 3976:
case 1791:
case 1096:
case 1499:
case 2416:
case 3853:
case 3163:
case 1755:
case 775:
case 1008:
case 1951:
case 3935:
case 1647:
case 3982:
case 1463:
case 2844:
case 387:
case 4032:
case 3772:
case 1136:
case 3538:
case 895:
case 1842:
case 437:
case 4030:
case 3913:
case 570:
case 4000:
case 2267:
case 155:
case 1510:
case 3721:
case 3216:
case 2521:
case 3586:
case 2749:
case 2787:
case 3672:
case 3703:
case 1964:
case 1036:
case 1785:
case 1249:
case 233:
case 1050:
case 2170:
case 1878:
case 1233:
case 974:
case 3937:
case 519:
case 1421:
case 490:
case 3490:
case 3227:
case 2249:
case 467:
case 3500:
case 3008:
case 1304:
case 232:
case 2194:
case 2619:
case 3719:
case 3047:
case 71:
case 1256:
case 281:
case 1272:
case 3550:
case 2995:
case 3504:
case 3132:
case 1245:
case 2367:
case 2049:
case 3212:
case 2846:
case 1530:
case 2301:
case 1638:
case 3949:
case 1783:
case 4053:
case 3900:
case 1197:
case 501:
case 2482:
case 3868:
case 2744:
case 368:
case 2627:
case 1639:
case 2190:
case 3092:
case 1110:
case 3693:
case 3688:
case 3658:
case 2632:
case 144:
case 3760:
case 3897:
case 1073:
case 2557:
case 258:
case 1973:
case 2361:
case 1235:
case 756:
case 3285:
case 1809:
case 3549:
case 1305:
case 2586:
case 125:
case 3896:
case 907:
case 2429:
case 2523:
case 1570:
case 2662:
case 2493:
case 919:
case 3520:
case 711:
case 3275:
case 2013:
case 4094:
case 3914:
case 902:
case 2205:
case 1489:
case 3729:
case 1456:
case 1781:
case 2870:
case 1561:
case 996:
case 212:
case 2673:
case 1043:
case 190:
case 1564:
case 717:
case 70:
case 3156:
case 23:
case 3085:
case 772:
case 1289:
case 3140:
case 4076:
case 1547:
case 725:
case 3310:
case 784:
case 593:
case 868:
case 3070:
case 1970:
case 6:
case 550:
case 1311:
case 1281:
case 1537:
case 1185:
case 2215:
case 49:
case 1654:
case 914:
case 2280:
case 3157:
case 2833:
case 4005:
case 2802:
case 3869:
case 3197:
case 2946:
case 1858:
case 1164:
case 2240:
case 3146:
case 123:
case 2942:
case 1140:
case 1227:
case 3389:
case 1427:
case 3055:
case 1193:
case 815:
case 818:
case 2965:
case 1957:
case 2864:
case 1835:
case 1557:
case 709:
case 1447:
case 3457:
case 2012:
case 3024:
case 660:
case 388:
case 3370:
case 3804:
case 3529:
case 40:
case 116:
case 1894:
case 529:
case 820:
case 2672:
case 706:
case 870:
case 3909:
case 2868:
case 3407:
case 1178:
case 150:
case 1065:
case 3908:
case 1160:
case 1174:
case 2861:
case 1848:
case 1681:
case 3188:
case 3783:
case 2830:
case 1724:
case 1843:
case 2865:
case 2519:
case 2806:
case 415:
case 1955:
case 2791:
case 1808:
case 2312:
case 1144:
case 2780:
case 2172:
case 3732:
case 1411:
case 16:
case 3205:
case 767:
case 3858:
case 1380:
case 1150:
case 1602:
case 351:
case 2992:
case 822:
case 2743:
case 2950:
case 1653:
case 2431:
case 2216:
case 4008:
case 3667:
case 3654:
case 1317:
case 2605:
case 2316:
case 2708:
case 4023:
case 1562:
case 1596:
case 841:
case 3709:
case 4084:
case 1346:
case 2576:
case 271:
case 3430:
case 2199:
case 3320:
case 3723:
case 2222:
case 360:
case 1607:
case 2087:
case 2265:
case 1969:
case 3965:
case 332:
case 3972:
case 2544:
case 2549:
case 945:
case 932:
case 3766:
case 1231:
case 2154:
case 3505:
case 3102:
case 2007:
case 138:
case 3984:
case 987:
case 803:
case 923:
case 1621:
case 638:
case 2574:
case 1204:
case 3629:
case 2738:
case 2057:
case 124:
case 589:
case 2982:
case 3803:
case 2906:
case 1211:
case 3392:
case 2130:
case 763:
case 1436:
case 3075:
case 2807:
case 1021:
case 601:
case 1316:
case 2915:
case 2800:
case 2575:
case 963:
case 2394:
case 3045:
case 992:
case 3287:
case 1251:
case 955:
case 540:
case 3436:
case 3302:
case 328:
case 1345:
case 3863:
case 3103:
case 289:
case 1548:
case 500:
case 2720:
case 3609:
case 3917:
case 4001:
case 1723:
case 2161:
case 1601:
case 2266:
case 2737:
case 1676:
case 2121:
case 777:
case 901:
case 2987:
case 2094:
case 2309:
case 2484:
case 2682:
case 3810:
case 913:
case 3134:
case 647:
case 2885:
case 187:
case 1721:
case 3218:
case 3058:
case 2353:
case 1722:
case 1981:
case 1438:
case 3135:
case 2256:
case 239:
case 3758:
case 370:
case 1033:
case 1410:
case 2200:
case 2339:
case 3779:
case 1748:
case 813:
case 1978:
case 655:
case 366:
case 1943:
case 2561:
case 2442:
case 2958:
case 3740:
case 788:
case 2781:
case 3127:
case 3598:
case 2333:
case 504:
case 1782:
case 2425:
case 2763:
case 3410:
case 4018:
case 2520:
case 3512:
case 634:
case 3374:
case 2522:
case 3655:
case 3862:
case 108:
case 1780:
case 2813:
case 3807:
case 2449:
case 2770:
case 3978:
case 110:
case 873:
case 2489:
case 1663:
case 3088:
case 785:
case 555:
case 3537:
case 3449:
case 1797:
case 1270:
case 321:
case 1284:
case 336:
case 3005:
case 1302:
case 2899:
case 2905:
case 397:
case 2556:
case 4082:
case 3386:
case 84:
case 2531:
case 3970:
case 3773:
case 3099:
case 2360:
case 2195:
case 2432:
case 2635:
case 1814:
case 1169:
case 2462:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1652652002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,];
var gg_b = "1652652002/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
