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
var o = 1;
switch (g) {
case 1921:
case 3023:
case 927:
case 1128:
case 3128:
case 2538:
case 2906:
case 983:
case 2132:
case 1908:
case 688:
case 223:
case 2299:
case 2945:
case 2723:
case 2202:
case 3558:
case 4082:
case 2305:
case 2781:
case 2801:
case 3803:
case 1853:
case 1078:
case 3980:
case 3142:
case 1868:
case 1096:
case 2429:
case 3777:
case 598:
case 1903:
case 3609:
case 817:
case 1321:
case 3144:
case 893:
case 3919:
case 2218:
case 3131:
case 3303:
case 4064:
case 2514:
case 2807:
case 3630:
case 1323:
case 1991:
case 1288:
case 530:
case 3583:
case 2433:
case 3540:
case 468:
case 1862:
case 1291:
case 332:
case 1825:
case 1419:
case 3748:
case 3964:
case 602:
case 1749:
case 1391:
case 3343:
case 3868:
case 2492:
case 2460:
case 2277:
case 781:
case 633:
case 71:
case 3966:
case 383:
case 1307:
case 3252:
case 1533:
case 2097:
case 3947:
case 637:
case 3683:
case 3910:
case 2885:
case 3755:
case 1657:
case 2926:
case 3822:
case 3806:
case 1337:
case 2586:
case 2405:
case 3813:
case 1165:
case 3070:
case 2920:
case 635:
case 151:
case 934:
case 569:
case 3245:
case 2217:
case 3084:
case 3455:
case 2657:
case 2427:
case 137:
case 2161:
case 2868:
case 1676:
case 3383:
case 2991:
case 3971:
case 3282:
case 1590:
case 1218:
case 2298:
case 2662:
case 2171:
case 482:
case 985:
case 51:
case 3311:
case 2339:
case 3452:
case 2314:
case 177:
case 809:
case 2344:
case 331:
case 1515:
case 3441:
case 1396:
case 402:
case 3644:
case 3332:
case 3248:
case 3247:
case 3425:
case 16:
case 2125:
case 1378:
case 4024:
case 230:
case 804:
case 3316:
case 3182:
case 1011:
case 2848:
case 2234:
case 581:
case 1745:
case 2458:
case 1934:
case 2535:
case 2409:
case 621:
case 3714:
case 414:
case 74:
case 1818:
case 401:
case 802:
case 2775:
case 995:
case 249:
case 1331:
case 2317:
case 2765:
case 1767:
case 716:
case 898:
case 905:
case 3275:
case 3505:
case 3160:
case 2872:
case 3942:
case 3899:
case 768:
case 774:
case 3001:
case 1509:
case 2471:
case 3081:
case 340:
case 610:
case 2004:
case 63:
case 510:
case 3639:
case 574:
case 2955:
case 49:
case 3153:
case 1468:
case 1999:
case 447:
case 4030:
case 3696:
case 2874:
case 2645:
case 2354:
case 3439:
case 2904:
case 3181:
case 2212:
case 747:
case 2431:
case 326:
case 454:
case 1535:
case 541:
case 3835:
case 2235:
case 3785:
case 59:
case 1575:
case 235:
case 2075:
case 2173:
case 2476:
case 3411:
case 3329:
case 517:
case 2948:
case 3820:
case 1198:
case 471:
case 857:
case 1324:
case 3874:
case 4039:
case 796:
case 1046:
case 3344:
case 737:
case 2780:
case 912:
case 797:
case 1012:
case 1449:
case 2917:
case 789:
case 2595:
case 15:
case 3772:
case 1310:
case 894:
case 1980:
case 1265:
case 3893:
case 3586:
case 2576:
case 1138:
case 3154:
case 2883:
case 3336:
case 273:
case 3888:
case 205:
case 3138:
case 2491:
case 594:
case 2020:
case 365:
case 2140:
case 2964:
case 1958:
case 814:
case 2000:
case 0:
case 2329:
case 1237:
case 2585:
case 2051:
case 2888:
case 714:
case 1491:
case 3770:
case 1426:
case 3016:
case 2148:
case 1376:
case 909:
case 1172:
case 2966:
case 2881:
case 144:
case 2025:
case 1255:
case 3653:
case 918:
case 1780:
case 883:
case 3809:
case 671:
case 197:
case 2890:
case 667:
case 4061:
case 4042:
case 225:
case 2562:
case 1945:
case 86:
case 290:
case 3657:
case 2463:
case 4059:
case 2713:
case 357:
case 3487:
case 189:
case 2761:
case 118:
case 2847:
case 3066:
case 3643:
case 3538:
case 2070:
case 2773:
case 3854:
case 1615:
case 1414:
case 2353:
case 3932:
case 3589:
case 2417:
case 1724:
case 445:
case 2766:
case 3141:
case 687:
case 1713:
case 3890:
case 3757:
case 1993:
case 2242:
case 2059:
case 3686:
case 2449:
case 590:
case 3616:
case 2644:
case 3095:
case 2022:
case 3862:
case 2519:
case 1062:
case 2808:
case 3041:
case 557:
case 3730:
case 1338:
case 2987:
case 2392:
case 206:
case 2054:
case 405:
case 2947:
case 991:
case 257:
case 400:
case 2074:
case 1858:
case 3949:
case 371:
case 3619:
case 453:
case 129:
case 2379:
case 1249:
case 102:
case 3443:
case 3100:
case 2422:
case 1427:
case 477:
case 1059:
case 3603:
case 3692:
case 2696:
case 2905:
case 2732:
case 1549:
case 1986:
case 1070:
case 2208:
case 2041:
case 560:
case 2670:
case 1049:
case 961:
case 2215:
case 3885:
case 1859:
case 48:
case 1116:
case 552:
case 2835:
case 916:
case 1943:
case 1976:
case 3508:
case 1443:
case 534:
case 992:
case 3179:
case 2002:
case 1277:
case 877:
case 3014:
case 2356:
case 1710:
case 1626:
case 2869:
case 1842:
case 2133:
case 4092:
case 1492:
case 2908:
case 3196:
case 1435:
case 769:
case 2978:
case 3255:
case 1895:
case 460:
case 607:
case 2504:
case 1957:
case 828:
case 3698:
case 2876:
case 2735:
case 3395:
case 525:
case 960:
case 3672:
case 3744:
case 3990:
case 2971:
case 4016:
case 1102:
case 1989:
case 2487:
case 1250:
case 805:
case 677:
case 1282:
case 2336:
case 2447:
case 1160:
case 3887:
case 2126:
case 1701:
case 2505:
case 2227:
case 1787:
case 2224:
case 1866:
case 3348:
case 3726:
case 2820:
case 2274:
case 1661:
case 2213:
case 1196:
case 1038:
case 2565:
case 556:
case 2490:
case 1555:
case 2347:
case 4094:
case 3116:
case 3456:
case 740:
case 1278:
case 3025:
case 2758:
case 4:
case 2385:
case 663:
case 2286:
case 3430:
case 3420:
case 4085:
case 1103:
case 3816:
case 1133:
case 1707:
case 1845:
case 2669:
case 4084:
case 1474:
case 1230:
case 2412:
case 3702:
case 549:
case 2090:
case 3753:
case 2986:
case 3746:
case 1794:
case 1743:
case 1824:
case 638:
case 4037:
case 1045:
case 2018:
case 628:
case 843:
case 775:
case 2923:
case 89:
case 3412:
case 1697:
case 3240:
case 3243:
case 838:
case 3915:
case 1898:
case 1850:
case 759:
case 1837:
case 1261:
case 829:
case 1937:
case 697:
case 1042:
case 3745:
case 3933:
case 3124:
case 3067:
case 3052:
case 2840:
case 3940:
case 2252:
case 364:
case 463:
case 448:
case 1723:
case 3079:
case 2190:
case 1253:
case 692:
case 2957:
case 2824:
case 3189:
case 900:
case 3523:
case 1572:
case 2873:
case 408:
case 1132:
case 1799:
case 1969:
case 1790:
case 3563:
case 1740:
case 2694:
case 1692:
case 4032:
case 283:
case 1022:
case 3334:
case 3765:
case 3792:
case 2826:
case 2072:
case 1647:
case 2388:
case 1768:
case 1571:
case 1180:
case 2083:
case 3197:
case 1589:
case 1808:
case 3711:
case 567:
case 1680:
case 965:
case 1601:
case 3169:
case 1404:
case 2192:
case 2007:
case 2149:
case 1225:
case 896:
case 1721:
case 3279:
case 2465:
case 253:
case 1715:
case 1635:
case 4078:
case 14:
case 772:
case 3762:
case 2858:
case 2243:
case 555:
case 269:
case 2384:
case 2316:
case 3728:
case 2197:
case 3664:
case 1561:
case 1798:
case 1083:
case 2931:
case 2193:
case 1204:
case 2705:
case 542:
case 4019:
case 3703:
case 1340:
case 1703:
case 1565:
case 1508:
case 3101:
case 3569:
case 57:
case 2793:
case 734:
case 1706:
case 2604:
case 3788:
case 4060:
case 2247:
case 1134:
case 2127:
case 955:
case 1214:
case 2774:
case 1297:
case 309:
case 272:
case 146:
case 1925:
case 1912:
case 793:
case 1299:
case 502:
case 1106:
case 2039:
case 531:
case 1532:
case 1026:
case 2374:
case 2684:
case 4021:
case 3028:
case 1962:
case 245:
case 2855:
case 1236:
case 2934:
case 1914:
case 2395:
case 3640:
case 363:
case 1400:
case 1579:
case 1439:
case 2559:
case 3921:
case 1487:
case 4088:
case 670:
case 1686:
case 2852:
case 1870:
case 3654:
case 3121:
case 2194:
case 746:
case 1566:
case 1826:
case 265:
case 3194:
case 3881:
case 1752:
case 2646:
case 1311:
case 1245:
case 4031:
case 1202:
case 856:
case 204:
case 1927:
case 3737:
case 2715:
case 1690:
case 820:
case 3969:
case 3022:
case 1938:
case 2320:
case 381:
case 627:
case 3478:
case 2204:
case 1700:
case 4002:
case 1524:
case 2828:
case 3914:
case 524:
case 895:
case 1979:
case 3650:
case 1387:
case 22:
case 2255:
case 1952:
case 507:
case 3956:
case 2583:
case 664:
case 398:
case 1815:
case 1891:
case 2341:
case 3221:
case 1936:
case 3740:
case 1171:
case 470:
case 333:
case 1882:
case 1867:
case 3963:
case 3814:
case 833:
case 3649:
case 97:
case 1008:
case 2142:
case 3958:
case 704:
case 2106:
case 2692:
case 2363:
case 187:
case 3524:
case 220:
case 613:
case 3560:
case 3040:
case 1650:
case 1274:
case 2668:
case 3808:
case 539:
case 1043:
case 1671:
case 2259:
case 2100:
case 3880:
case 184:
case 3739:
case 374:
case 263:
case 575:
case 443:
case 3209:
case 980:
case 3856:
case 1623:
case 1698:
case 3710:
case 2411:
case 298:
case 2389:
case 4013:
case 1618:
case 710:
case 681:
case 1455:
case 1634:
case 3999:
case 1072:
case 2367:
case 2701:
case 3928:
case 1192:
case 3786:
case 3370:
case 21:
case 438:
case 1095:
case 2967:
case 925:
case 3200:
case 2712:
case 2727:
case 3350:
case 1471:
case 392:
case 1024:
case 3950:
case 3011:
case 3105:
case 1871:
case 1534:
case 3220:
case 1469:
case 1913:
case 1351:
case 2942:
case 1504:
case 3440:
case 1666:
case 194:
case 2268:
case 1060:
case 1392:
case 3645:
case 844:
case 1459:
case 3904:
case 131:
case 3250:
case 343:
case 1242:
case 2249:
case 1017:
case 1111:
case 81:
case 3689:
case 3997:
case 1778:
case 1247:
case 876:
case 1847:
case 735:
case 3936:
case 2467:
case 2511:
case 417:
case 1624:
case 437:
case 2265:
case 3076:
case 3550:
case 3010:
case 2938:
case 665:
case 3861:
case 341:
case 65:
case 3029:
case 2043:
case 2457:
case 1786:
case 451:
case 2031:
case 826:
case 3927:
case 1922:
case 3431:
case 3935:
case 2743:
case 504:
case 3691:
case 2871:
case 2494:
case 2368:
case 1942:
case 2884:
case 2114:
case 926:
case 2283:
case 1872:
case 1667:
case 270:
case 1268:
case 593:
case 2587:
case 559:
case 2958:
case 3592:
case 2236:
case 2113:
case 2915:
case 2118:
case 993:
case 839:
case 2625:
case 3304:
case 1526:
case 391:
case 1005:
case 2348:
case 3060:
case 2865:
case 2324:
case 242:
case 1718:
case 3409:
case 3445:
case 3297:
case 229:
case 132:
case 3656:
case 2503:
case 3587:
case 3831:
case 2600:
case 2673:
case 3700:
case 1035:
case 2196:
case 3674:
case 1560:
case 2571:
case 1475:
case 1672:
case 4076:
case 4027:
case 347:
case 1585:
case 2900:
case 943:
case 2822:
case 3847:
case 3415:
case 467:
case 160:
case 3447:
case 1388:
case 1805:
case 1367:
case 2391:
case 236:
case 1877:
case 2439:
case 1241:
case 1587:
case 830:
case 33:
case 743:
case 1326:
case 2756:
case 3551:
case 3694:
case 1228:
case 2632:
case 2399:
case 3410:
case 3388:
case 2837:
case 2441:
case 3902:
case 1544:
case 2980:
case 3351:
case 1972:
case 82:
case 182:
case 526:
case 3087:
case 1763:
case 3988:
case 2790:
case 3313:
case 3981:
case 201:
case 551:
case 2619:
case 2445:
case 1463:
case 2984:
case 2764:
case 173:
case 2124:
case 2488:
case 2795:
case 1951:
case 568:
case 620:
case 2129:
case 3203:
case 2818:
case 2533:
case 3009:
case 2497:
case 396:
case 842:
case 3270:
case 963:
case 2593:
case 854:
case 3584:
case 1559:
case 1344:
case 1479:
case 3588:
case 736:
case 1518:
case 1403:
case 2959:
case 3355:
case 1389:
case 2501:
case 1806:
case 1988:
case 3574:
case 2296:
case 3008:
case 2311:
case 489:
case 920:
case 3496:
case 1788:
case 3743:
case 2352:
case 1452:
case 2006:
case 717:
case 70:
case 1206:
case 3843:
case 2532:
case 1374:
case 1030:
case 3521:
case 318:
case 1219:
case 2599:
case 2918:
case 241:
case 3004:
case 3972:
case 2733:
case 288:
case 1762:
case 938:
case 3467:
case 3272:
case 2318:
case 3839:
case 511:
case 2250:
case 3916:
case 1345:
case 800:
case 2289:
case 694:
case 3721:
case 3715:
case 3072:
case 107:
case 2400:
case 3819:
case 3166:
case 190:
case 3232:
case 1186:
case 1609:
case 2248:
case 1332:
case 3931:
case 3083:
case 1683:
case 3264:
case 1687:
case 93:
case 2011:
case 2914:
case 1477:
case 3413:
case 711:
case 701:
case 3572:
case 1531:
case 2260:
case 3257:
case 1216:
case 2308:
case 2998:
case 2829:
case 1071:
case 368:
case 924:
case 399:
case 879:
case 1944:
case 2663:
case 2878:
case 3284:
case 3258:
case 2779:
case 3719:
case 536:
case 3677:
case 3769:
case 1023:
case 3802:
case 561:
case 2594:
case 3471:
case 3903:
case 719:
case 3069:
case 3206:
case 2275:
case 3230:
case 1429:
case 2849:
case 1742:
case 2240:
case 2226:
case 1127:
case 1135:
case 1097:
case 2105:
case 261:
case 3668:
case 3749:
case 728:
case 3661:
case 2620:
case 2907:
case 1954:
case 1366:
case 1146:
case 3285:
case 77:
case 546:
case 1881:
case 3320:
case 410:
case 2066:
case 1748:
case 3767:
case 606:
case 2088:
case 1177:
case 1303:
case 958:
case 163:
case 3909:
case 1284:
case 1032:
case 782:
case 1499:
case 1271:
case 2734:
case 1973:
case 1968:
case 2655:
case 1050:
case 865:
case 1272:
case 1691:
case 2309:
case 1453:
case 1065:
case 1563:
case 1074:
case 2606:
case 1341:
case 3872:
case 2965:
case 2432:
case 858:
case 3059:
case 3537:
case 3103:
case 3613:
case 823:
case 1066:
case 1330:
case 956:
case 3307:
case 3382:
case 1729:
case 430:
case 496:
case 10:
case 255:
case 550:
case 2974:
case 2174:
case 2069:
case 1750:
case 2672:
case 986:
case 2079:
case 79:
case 1057:
case 645:
case 509:
case 3097:
case 1876:
case 208:
case 1087:
case 745:
case 3176:
case 3058:
case 3007:
case 1193:
case 988:
case 2185:
case 1946:
case 4025:
case 741:
case 2157:
case 3622:
case 784:
case 3771:
case 139:
case 712:
case 1227:
case 3629:
case 2426:
case 3312:
case 1773:
case 487:
case 2288:
case 3513:
case 1079:
case 2386:
case 1654:
case 733:
case 529:
case 1643:
case 2172:
case 3296:
case 413:
case 1353:
case 108:
case 760:
case 837:
case 2973:
case 60:
case 3375:
case 2603:
case 1481:
case 215:
case 1470:
case 2786:
case 1852:
case 1513:
case 1851:
case 939:
case 1823:
case 1947:
case 1408:
case 1569:
case 3851:
case 1053:
case 3709:
case 2584:
case 1712:
case 2455:
case 3959:
case 2572:
case 2331:
case 2560:
case 2096:
case 3756:
case 3784:
case 2528:
case 1554:
case 136:
case 1357:
case 1483:
case 1956:
case 3476:
case 1846:
case 2369:
case 411:
case 1998:
case 643:
case 2544:
case 2015:
case 1:
case 2147:
case 753:
case 3826:
case 2557:
case 20:
case 2647:
case 4045:
case 1887:
case 2346:
case 1833:
case 3637:
case 1184:
case 44:
case 2139:
case 109:
case 3483:
case 2166:
case 342:
case 4051:
case 1940:
case 330:
case 3126:
case 1734:
case 142:
case 4080:
case 3595:
case 3497:
case 244:
case 3163:
case 2536:
case 3585:
case 1766:
case 3852:
case 605:
case 678:
case 1257:
case 2406:
case 841:
case 703:
case 1909:
case 1194:
case 3321:
case 2184:
case 1728:
case 1088:
case 2473:
case 418:
case 2179:
case 2361:
case 37:
case 1294:
case 2972:
case 1610:
case 1286:
case 154:
case 3278:
case 2550:
case 24:
case 3418:
case 3520:
case 625:
case 1521:
case 3669:
case 2462:
case 3384:
case 319:
case 3135:
case 2816:
case 3172:
case 3125:
case 1215:
case 3136:
case 1567:
case 675:
case 579:
case 962:
case 4095:
case 3844:
case 1161:
case 424:
case 412:
case 1663:
case 1006:
case 1992:
case 3621:
case 199:
case 1892:
case 296:
case 1838:
case 3605:
case 1699:
case 202:
case 3647:
case 3663:
case 171:
case 611:
case 2910:
case 3840:
case 3277:
case 130:
case 2489:
case 224:
case 2570:
case 2879:
case 111:
case 1322:
case 668:
case 2609:
case 370:
case 3470:
case 1173:
case 3056:
case 2064:
case 819:
case 2413:
case 1558:
case 761:
case 145:
case 1547:
case 55:
case 515:
case 2262:
case 1229:
case 1290:
case 639:
case 446:
case 902:
case 1583:
case 519:
case 2477:
case 3289:
case 2466:
case 1466:
case 2372:
case 1240:
case 4086:
case 3607:
case 535:
case 1603:
case 3555:
case 1722:
case 2045:
case 2340:
case 3419:
case 1269:
case 203:
case 2109:
case 3734:
case 3331:
case 880:
case 397:
case 2310:
case 1251:
case 566:
case 3642:
case 3800:
case 1897:
case 870:
case 428:
case 2893:
case 3256:
case 2898:
case 2387:
case 452:
case 150:
case 2759:
case 2410:
case 2117:
case 1398:
case 521:
case 1983:
case 1648:
case 3534:
case 3191:
case 1791:
case 1930:
case 1685:
case 3604:
case 416:
case 3118:
case 1902:
case 3428:
case 2040:
case 1829:
case 1801:
case 2716:
case 2187:
case 2671:
case 3532:
case 217:
case 1226:
case 2154:
case 1432:
case 2725:
case 2616:
case 2548:
case 1923:
case 3877:
case 3327:
case 465:
case 1260:
case 2988:
case 2182:
case 1514:
case 3575:
case 2836:
case 1142:
case 2009:
case 3137:
case 1433:
case 3565:
case 2450:
case 478:
case 936:
case 2153:
case 3913:
case 3269:
case 3883:
case 1244:
case 95:
case 792:
case 3183:
case 818:
case 3717:
case 2141:
case 3386:
case 3109:
case 2995:
case 159:
case 3695:
case 513:
case 676:
case 3625:
case 334:
case 1098:
case 3414:
case 1263:
case 3229:
case 3598:
case 2651:
case 3015:
case 650:
case 2425:
case 2975:
case 3884:
case 1316:
case 3596:
case 3509:
case 2624:
case 3832:
case 2502:
case 2902:
case 123:
case 2049:
case 3557:
case 2390:
case 3175:
case 1327:
case 533:
case 1266:
case 1904:
case 2674:
case 1765:
case 121:
case 1959:
case 2553:
case 1813:
case 3612:
case 3795:
case 3977:
case 2989:
case 481:
case 1348:
case 3465:
case 387:
case 1361:
case 1417:
case 3580:
case 1644:
case 3576:
case 1856:
case 780:
case 377:
case 1016:
case 3611:
case 279:
case 2784:
case 2295:
case 2928:
case 1195:
case 647:
case 1753:
case 1191:
case 4075:
case 3346:
case 3168:
case 1963:
case 2710:
case 674:
case 2478:
case 589:
case 99:
case 2038:
case 1711:
case 2961:
case 2001:
case 3345:
case 1014:
case 2588:
case 2927:
case 1174:
case 3764:
case 1510:
case 1203:
case 1586:
case 2195:
case 3442:
case 762:
case 1064:
case 3393:
case 80:
case 1901:
case 1540:
case 930:
case 3846:
case 2563:
case 831:
case 337:
case 1669:
case 3501:
case 2333:
case 3953:
case 2030:
case 840:
case 1442:
case 3489:
case 3208:
case 2086:
case 2005:
case 1905:
case 3992:
case 1015:
case 3129:
case 3233:
case 3504:
case 2273:
case 133:
case 2057:
case 3433:
case 2968:
case 1354:
case 3472:
case 1212:
case 887:
case 1217:
case 629:
case 2997:
case 4011:
case 2266:
case 755:
case 2630:
case 2592:
case 110:
case 2853:
case 1418:
case 3207:
case 1885:
case 2099:
case 2706:
case 2833:
case 2748:
case 355:
case 2635:
case 4055:
case 756:
case 474:
case 882:
case 3265:
case 409:
case 3486:
case 764:
case 100:
case 2261:
case 2892:
case 1725:
case 2981:
case 1300:
case 798:
case 2047:
case 3249:
case 3897:
case 2393:
case 3624:
case 1342:
case 4018:
case 490:
case 932:
case 1373:
case 3801:
case 2246:
case 322:
case 1084:
case 3593:
case 2792:
case 3449:
case 3577:
case 113:
case 699:
case 2116:
case 1889:
case 3326:
case 433:
case 578:
case 2542:
case 3529:
case 3111:
case 966:
case 233:
case 516:
case 3205:
case 3367:
case 2683:
case 3699:
case 512:
case 2251:
case 770:
case 2008:
case 3288:
case 2582:
case 583:
case 3526:
case 1588:
case 3817:
case 640:
case 608:
case 2050:
case 2281:
case 3502:
case 4053:
case 1113:
case 3366:
case 3337:
case 2315:
case 3401:
case 436:
case 3215:
case 3660:
case 1380:
case 3594:
case 2660:
case 1520:
case 1004:
case 1168:
case 476:
case 2436:
case 832:
case 4040:
case 3641:
case 3211:
case 2714:
case 587:
case 3892:
case 2549:
case 2078:
case 1574:
case 669:
case 3829:
case 2060:
case 488:
case 2328:
case 3148:
case 2304:
case 906:
case 76:
case 1939:
case 1516:
case 1548:
case 2800:
case 787:
case 3098:
case 3049:
case 1157:
case 2102:
case 1926:
case 1279:
case 2507:
case 1967:
case 282:
case 358:
case 3089:
case 974:
case 3064:
case 3063:
case 2708:
case 3875:
case 466:
case 2621:
case 2481:
case 3951:
case 1364:
case 584:
case 1779:
case 2629:
case 252:
case 237:
case 324:
case 439:
case 2631:
case 1811:
case 652:
case 1747:
case 3818:
case 3530:
case 1655:
case 1630:
case 1131:
case 1413:
case 286:
case 2183:
case 2165:
case 3048:
case 3199:
case 227:
case 890:
case 75:
case 3925:
case 423:
case 2349:
case 306:
case 2048:
case 1617:
case 2877:
case 3352:
case 300:
case 350:
case 2749:
case 1411:
case 2597:
case 3434:
case 3244:
case 2137:
case 978:
case 274:
case 773:
case 2300:
case 3204:
case 683:
case 562:
case 3408:
case 3035:
case 104:
case 2028:
case 3241:
case 1966:
case 1900:
case 2678:
case 2596:
case 1736:
case 2358:
case 3812:
case 532:
case 2703:
case 2430:
case 429:
case 3475:
case 3147:
case 825:
case 66:
case 3398:
case 3416:
case 4004:
case 3152:
case 3620:
case 705:
case 155:
case 2856:
case 3648:
case 3262:
case 4091:
case 3886:
case 3127:
case 124:
case 1170:
case 2979:
case 1397:
case 1107:
case 3662:
case 1507:
case 1776:
case 3268:
case 2640:
case 1751:
case 2522:
case 2611:
case 2258:
case 947:
case 264:
case 1570:
case 1037:
case 808:
case 3562:
case 573:
case 644:
case 3228:
case 2297:
case 2279:
case 2636:
case 1063:
case 4057:
case 790:
case 254:
case 4070:
case 999:
case 2719:
case 3747:
case 2969:
case 970:
case 2231:
case 2794:
case 2525:
case 2566:
case 3170:
case 1735:
case 3291:
case 238:
case 1223:
case 3548:
case 1592:
case 23:
case 2698:
case 499:
case 3793:
case 2233:
case 4090:
case 459:
case 419:
case 680:
case 1844:
case 421:
case 212:
case 1055:
case 2239:
case 1054:
case 1144:
case 3114:
case 1401:
case 2863:
case 2529:
case 3333:
case 191:
case 2523:
case 1812:
case 3995:
case 904:
case 3458:
case 3444:
case 3627:
case 604:
case 2408:
case 564:
case 3994:
case 2131:
case 1306:
case 3237:
case 3828:
case 2676:
case 1769:
case 1285:
case 3906:
case 310:
case 3024:
case 293:
case 1974:
case 1501:
case 3970:
case 2381:
case 523:
case 726:
case 3042:
case 2985:
case 2394:
case 1890:
case 778:
case 3617:
case 1390:
case 799:
case 13:
case 623:
case 192:
case 3218:
case 3281:
case 1781:
case 1941:
case 849:
case 2095:
case 1764:
case 1482:
case 2831:
case 661:
case 1595:
case 404:
case 2982:
case 2323:
case 4081:
case 1112:
case 2442:
case 1573:
case 4074:
case 3117:
case 3335:
case 362:
case 1668:
case 1109:
case 657:
case 616:
case 1235:
case 967:
case 3112:
case 3246:
case 3570:
case 1688:
case 345:
case 3222:
case 69:
case 2444:
case 1888:
case 7:
case 2181:
case 2130:
case 19:
case 754:
case 367:
case 4009:
case 4079:
case 3438:
case 2228:
case 554:
case 172:
case 3283:
case 3273:
case 3776:
case 1369:
case 1620:
case 3130:
case 1246:
case 3518:
case 2785:
case 422:
case 2380:
case 1441:
case 3938:
case 1684:
case 998:
case 2737:
case 2512:
case 1211:
case 3020:
case 2017:
case 1964:
case 2145:
case 2198:
case 1434:
case 2517:
case 3123:
case 946:
case 3973:
case 2861:
case 1839:
case 2623:
case 997:
case 1101:
case 3552:
case 731:
case 845:
case 3866:
case 3601:
case 1464:
case 1031:
case 2220:
case 1965:
case 2033:
case 1358:
case 2919:
case 3731:
case 3536:
case 1899:
case 1280:
case 2237:
case 3392:
case 3930:
case 2650:
case 207:
case 3610:
case 673:
case 1702:
case 3086:
case 1910:
case 685:
case 3493:
case 3825:
case 1761:
case 617:
case 3353:
case 1809:
case 1577:
case 861:
case 944:
case 1834:
case 3855:
case 1301:
case 1007:
case 897:
case 2641:
case 2543:
case 2459:
case 553:
case 3631:
case 1383:
case 588:
case 2115:
case 1422:
case 2404:
case 586:
case 3704:
case 3198:
case 432:
case 3108:
case 216:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1674943202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,];
var gg_b = "1674943202/";

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
