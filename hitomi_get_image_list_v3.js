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
case 125:
case 957:
case 2078:
case 1000:
case 1347:
case 1597:
case 3890:
case 2850:
case 2494:
case 725:
case 3181:
case 985:
case 3275:
case 1716:
case 3226:
case 2102:
case 2439:
case 3583:
case 1591:
case 2663:
case 2938:
case 2923:
case 377:
case 2613:
case 2067:
case 994:
case 410:
case 77:
case 2729:
case 3244:
case 3313:
case 3792:
case 1241:
case 2752:
case 735:
case 3375:
case 615:
case 58:
case 2134:
case 2788:
case 2199:
case 42:
case 135:
case 2916:
case 3886:
case 3263:
case 805:
case 29:
case 1723:
case 1738:
case 1105:
case 2306:
case 653:
case 1451:
case 3344:
case 814:
case 3213:
case 3470:
case 2874:
case 2955:
case 2644:
case 1457:
case 3204:
case 1627:
case 3573:
case 740:
case 2580:
case 3118:
case 1917:
case 3171:
case 3285:
case 2415:
case 936:
case 2246:
case 3092:
case 1978:
case 2900:
case 3853:
case 2893:
case 958:
case 1548:
case 674:
case 82:
case 1301:
case 1530:
case 1479:
case 3943:
case 1023:
case 3610:
case 3168:
case 1307:
case 931:
case 1040:
case 2465:
case 1462:
case 2604:
case 3009:
case 1016:
case 3565:
case 3646:
case 2717:
case 1899:
case 2596:
case 3304:
case 3964:
case 2711:
case 3385:
case 393:
case 3232:
case 2805:
case 781:
case 2761:
case 921:
case 4047:
case 1055:
case 1412:
case 2210:
case 2473:
case 3515:
case 83:
case 4041:
case 307:
case 1201:
case 3128:
case 3133:
case 1063:
case 2476:
case 1704:
case 3531:
case 3960:
case 1927:
case 2932:
case 1848:
case 223:
case 1830:
case 1921:
case 3041:
case 407:
case 1678:
case 2600:
case 2593:
case 1661:
case 3553:
case 1249:
case 988:
case 2735:
case 2214:
case 1170:
case 728:
case 2880:
case 1958:
case 3620:
case 1667:
case 1013:
case 3873:
case 3910:
case 932:
case 3643:
case 543:
case 3157:
case 3946:
case 1026:
case 2985:
case 1075:
case 2904:
case 478:
case 1732:
case 2453:
case 363:
case 2584:
case 209:
case 305:
case 3664:
case 2069:
case 3856:
case 3707:
case 922:
case 138:
case 782:
case 3189:
case 3701:
case 3798:
case 1599:
case 182:
case 2782:
case 738:
case 2243:
case 913:
case 408:
case 1032:
case 375:
case 1652:
case 2021:
case 1726:
case 2963:
case 2303:
case 2027:
case 2130:
case 4049:
case 3216:
case 955:
case 2913:
case 3001:
case 1972:
case 3098:
case 2638:
case 2623:
case 3266:
case 1808:
case 2870:
case 32:
case 3112:
case 3474:
case 878:
case 1744:
case 3255:
case 987:
case 2295:
case 3323:
case 3338:
case 964:
case 2203:
case 2574:
case 1969:
case 3316:
case 1309:
case 199:
case 1085:
case 310:
case 683:
case 949:
case 2926:
case 1004:
case 893:
case 2616:
case 799:
case 1477:
case 3747:
case 2772:
case 617:
case 1196:
case 3355:
case 3240:
case 2545:
case 3586:
case 1629:
case 2655:
case 2944:
case 1468:
case 1919:
case 3906:
case 33:
case 3424:
case 982:
case 3532:
case 3373:
case 419:
case 1435:
case 1922:
case 2673:
case 3680:
case 679:
case 1776:
case 1987:
case 3446:
case 1330:
case 2192:
case 1598:
case 1348:
case 2759:
case 3799:
case 3188:
case 2404:
case 1662:
case 578:
case 1507:
case 951:
case 788:
case 2036:
case 928:
case 2814:
case 66:
case 1849:
case 2656:
case 1737:
case 3984:
case 2665:
case 732:
case 612:
case 2546:
case 1482:
case 3504:
case 1731:
case 3410:
case 2787:
case 2976:
case 2432:
case 85:
case 2781:
case 472:
case 507:
case 160:
case 1651:
case 3563:
case 3838:
case 2683:
case 937:
case 1031:
case 3161:
case 1547:
case 1657:
case 1308:
case 3383:
case 1968:
case 45:
case 2444:
case 3406:
case 1037:
case 1120:
case 1053:
case 2081:
case 1918:
case 1469:
case 1971:
case 577:
case 149:
case 3002:
case 2087:
case 3513:
case 999:
case 749:
case 623:
case 3866:
case 4048:
case 3526:
case 38:
case 1114:
case 164:
case 1291:
case 2149:
case 3575:
case 187:
case 218:
case 1936:
case 927:
case 2895:
case 1689:
case 2718:
case 819:
case 2354:
case 3034:
case 1076:
case 609:
case 2059:
case 2777:
case 2986:
case 3654:
case 3813:
case 2012:
case 2983:
case 3970:
case 575:
case 274:
case 4034:
case 1592:
case 3158:
case 2101:
case 2789:
case 3182:
case 2455:
case 1429:
case 2274:
case 1342:
case 1928:
case 3048:
case 2690:
case 1933:
case 3650:
case 48:
case 1671:
case 935:
case 1841:
case 3127:
case 2350:
case 3523:
case 1677:
case 1794:
case 3286:
case 2062:
case 1847:
case 969:
case 3540:
case 1739:
case 1509:
case 302:
case 1065:
case 3708:
case 1783:
case 3135:
case 3844:
case 3797:
case 2079:
case 2757:
case 97:
case 1636:
case 3386:
case 2733:
case 200:
case 2728:
case 3403:
case 2595:
case 3566:
case 2939:
case 157:
case 8:
case 785:
case 1756:
case 2284:
case 3331:
case 721:
case 3414:
case 2057:
case 2779:
case 90:
case 2631:
case 3337:
case 2973:
case 2810:
case 4:
case 1622:
case 3008:
case 3091:
case 2051:
case 1302:
case 3225:
case 2393:
case 1234:
case 2141:
case 986:
case 952:
case 3832:
case 3464:
case 2147:
case 1681:
case 2653:
case 3693:
case 3684:
case 88:
case 2089:
case 3996:
case 801:
case 476:
case 1979:
case 1461:
case 2384:
case 611:
case 3231:
case 3443:
case 1467:
case 2305:
case 1106:
case 3420:
case 204:
case 505:
case 790:
case 616:
case 1659:
case 2625:
case 1094:
case 3169:
case 2676:
case 3804:
case 319:
case 2915:
case 514:
case 1478:
case 190:
case 2514:
case 136:
case 758:
case 3325:
case 4042:
case 3253:
case 1411:
case 3730:
case 3261:
case 566:
case 3649:
case 1896:
case 1437:
case 1220:
case 2422:
case 3559:
case 1314:
case 1243:
case 3710:
case 282:
case 256:
case 133:
case 709:
case 1727:
case 251:
case 3760:
case 2075:
case 3194:
case 380:
case 3211:
case 2481:
case 2732:
case 1453:
case 109:
case 592:
case 3581:
case 3724:
case 1735:
case 1214:
case 1343:
case 1108:
case 2170:
case 1072:
case 2958:
case 1880:
case 3998:
case 2013:
case 3587:
case 341:
case 2982:
case 2785:
case 3311:
case 649:
case 829:
case 3434:
case 450:
case 2063:
case 2617:
case 1425:
case 346:
case 2704:
case 1932:
case 2611:
case 548:
case 2848:
case 1600:
case 2678:
case 1772:
case 3442:
case 429:
case 2196:
case 1395:
case 3156:
case 589:
case 632:
case 712:
case 3889:
case 2629:
case 1655:
case 898:
case 3024:
case 2919:
case 3165:
case 3288:
case 4043:
case 2418:
case 3536:
case 2471:
case 4020:
case 3115:
case 2309:
case 1490:
case 2085:
case 1926:
case 3046:
case 2763:
case 2004:
case 2477:
case 465:
case 227:
case 1913:
case 1058:
case 1623:
case 3577:
case 3851:
case 2808:
case 1870:
case 1082:
case 3229:
case 1295:
case 3173:
case 842:
case 622:
case 454:
case 3571:
case 3706:
case 1719:
case 2688:
case 1769:
case 1021:
case 4014:
case 2726:
case 1303:
case 3947:
case 2392:
case 1027:
case 2209:
case 2775:
case 3060:
case 2723:
case 1306:
case 3319:
case 2105:
case 711:
case 2451:
case 2740:
case 3408:
case 3014:
case 94:
case 111:
case 1644:
case 1955:
case 868:
case 2428:
case 269:
case 1134:
case 3589:
case 3176:
case 116:
case 4010:
case 303:
case 1199:
case 339:
case 235:
case 3369:
case 354:
case 636:
case 1923:
case 3043:
case 1938:
case 545:
case 3020:
case 1067:
case 2489:
case 3533:
case 3219:
case 1729:
case 841:
case 621:
case 3641:
case 225:
case 467:
case 2952:
case 3992:
case 1078:
case 3818:
case 1011:
case 3871:
case 846:
case 626:
case 1850:
case 2988:
case 1494:
case 2341:
case 2193:
case 2716:
case 3647:
case 4024:
case 1570:
case 2508:
case 1439:
case 1017:
case 1663:
case 2635:
case 1029:
case 3949:
case 530:
case 446:
case 2207:
case 596:
case 884:
case 1473:
case 3743:
case 3282:
case 2066:
case 281:
case 3720:
case 2016:
case 685:
case 2834:
case 895:
case 2899:
case 970:
case 1596:
case 657:
case 3221:
case 562:
case 3448:
case 3186:
case 1711:
case 3430:
case 591:
case 1346:
case 3235:
case 3382:
case 2301:
case 2398:
case 2961:
case 1224:
case 2530:
case 3562:
case 2967:
case 3601:
case 2040:
case 1465:
case 2658:
case 3512:
case 2917:
case 1246:
case 3190:
case 4006:
case 1052:
case 915:
case 3881:
case 2621:
case 1088:
case 2802:
case 2911:
case 373:
case 3003:
case 652:
case 1345:
case 2146:
case 3492:
case 2452:
case 100:
case 3869:
case 2488:
case 3104:
case 584:
case 285:
case 896:
case 3277:
case 1994:
case 1686:
case 1939:
case 4093:
case 1438:
case 2509:
case 81:
case 1440:
case 3770:
case 294:
case 2242:
case 1751:
case 3336:
case 681:
case 862:
case 3819:
case 1757:
case 2636:
case 1690:
case 2928:
case 2160:
case 2618:
case 2841:
case 3409:
case 916:
case 1350:
case 2847:
case 640:
case 4084:
case 2073:
case 1107:
case 1012:
case 3872:
case 3080:
case 1983:
case 174:
case 1198:
case 3552:
case 1789:
case 1101:
case 3588:
case 2110:
case 2342:
case 3997:
case 1503:
case 3699:
case 2659:
case 366:
case 258:
case 2094:
case 3054:
case 2417:
case 3634:
case 669:
case 1915:
case 115:
case 3287:
case 2399:
case 1400:
case 236:
case 3175:
case 3281:
case 2334:
case 1293:
case 2411:
case 231:
case 153:
case 1384:
case 580:
case 361:
case 3144:
case 2467:
case 753:
case 392:
case 859:
case 104:
case 2962:
case 41:
case 770:
case 226:
case 845:
case 1393:
case 2234:
case 2687:
case 3827:
case 3567:
case 1028:
case 1033:
case 3930:
case 491:
case 1147:
case 3387:
case 2807:
case 3113:
case 1284:
case 2756:
case 3578:
case 3511:
case 1779:
case 1057:
case 3858:
case 2898:
case 2801:
case 221:
case 1973:
case 1810:
case 2765:
case 1051:
case 1615:
case 550:
case 1787:
case 1976:
case 783:
case 1925:
case 2427:
case 330:
case 1781:
case 3793:
case 448:
case 1432:
case 2753:
case 1864:
case 1524:
case 2679:
case 3166:
case 232:
case 3074:
case 1814:
case 1036:
case 1656:
case 2849:
case 117:
case 362:
case 3498:
case 1665:
case 2731:
case 1396:
case 2482:
case 2195:
case 717:
case 3212:
case 2987:
case 1192:
case 2330:
case 1759:
case 2348:
case 2662:
case 1510:
case 1404:
case 1018:
case 1953:
case 2507:
case 461:
case 2981:
case 2090:
case 320:
case 3362:
case 3811:
case 3138:
case 1937:
case 847:
case 627:
case 2435:
case 3521:
case 1380:
case 1843:
case 222:
case 2922:
case 573:
case 3527:
case 1560:
case 1820:
case 1931:
case 1718:
case 4080:
case 3750:
case 2790:
case 447:
case 1771:
case 3441:
case 1506:
case 1354:
case 2076:
case 979:
case 2164:
case 1777:
case 213:
case 3447:
case 2025:
case 1413:
case 718:
case 3251:
case 2472:
case 264:
case 565:
case 503:
case 287:
case 118:
case 861:
case 1768:
case 2936:
case 2297:
case 656:
case 1895:
case 3084:
case 255:
case 3093:
case 2053:
case 3852:
case 2892:
case 2971:
case 249:
case 2628:
case 3572:
case 1087:
case 1426:
case 1475:
case 3745:
case 3333:
case 2786:
case 3942:
case 1022:
case 3357:
case 912:
case 529:
case 2651:
case 2031:
case 2547:
case 489:
case 2657:
case 1370:
case 2308:
case 2143:
case 2391:
case 3774:
case 3351:
case 1444:
case 1736:
case 2419:
case 3012:
case 1872:
case 34:
case 2813:
case 1908:
case 2970:
case 374:
case 1991:
case 1368:
case 997:
case 3789:
case 1552:
case 3503:
case 1236:
case 2182:
case 2495:
case 4059:
case 1588:
case 3455:
case 3690:
case 2650:
case 2030:
case 903:
case 2286:
case 3350:
case 2523:
case 418:
case 1409:
case 2540:
case 2135:
case 1336:
case 3374:
case 3751:
case 3440:
case 2708:
case 1770:
case 1096:
case 2674:
case 3806:
case 1819:
case 3757:
case 3079:
case 1268:
case 1185:
case 2386:
case 3733:
case 3345:
case 3595:
case 1104:
case 2403:
case 1529:
case 2566:
case 25:
case 3686:
case 1277:
case 3994:
case 883:
case 789:
case 929:
case 2875:
case 512:
case 1796:
case 1113:
case 677:
case 1511:
case 3779:
case 1322:
case 3057:
case 3631:
case 523:
case 2091:
case 483:
case 3810:
case 2008:
case 4036:
case 2225:
case 1259:
case 417:
case 3520:
case 3393:
case 3860:
case 2353:
case 370:
case 1948:
case 1163:
case 243:
case 1930:
case 1561:
case 3956:
case 2996:
case 3564:
case 353:
case 792:
case 2605:
case 1780:
case 818:
case 3384:
case 2443:
case 3965:
case 2420:
case 1222:
case 3305:
case 973:
case 3625:
case 3762:
case 166:
case 4068:
case 1287:
case 315:
case 2169:
case 3676:
case 1634:
case 1126:
case 2325:
case 2748:
case 1359:
case 3293:
case 2376:
case 1175:
case 1281:
case 1138:
case 84:
case 1123:
case 1279:
case 3068:
case 1312:
case 2256:
case 874:
case 3296:
case 2373:
case 3937:
case 2042:
case 3843:
case 3820:
case 3485:
case 3192:
case 4089:
case 1558:
case 2188:
case 720:
case 3510:
case 3759:
case 3077:
case 1817:
case 2993:
case 2800:
case 3071:
case 1074:
case 11:
case 1407:
case 317:
case 2696:
case 791:
case 470:
case 4028:
case 3546:
case 1401:
case 3665:
case 1379:
case 3722:
case 2585:
case 162:
case 1498:
case 2129:
case 1212:
case 3396:
case 3787:
case 800:
case 1262:
case 3925:
case 2460:
case 3524:
case 2315:
case 1793:
case 3109:
case 3432:
case 1116:
case 3781:
case 2702:
case 730:
case 4051:
case 796:
case 2:
case 400:
case 2563:
case 124:
case 2838:
case 2670:
case 1942:
case 3022:
case 2840:
case 1774:
case 1351:
case 3444:
case 984:
case 1697:
case 3370:
case 2406:
case 2167:
case 145:
case 3990:
case 3426:
case 2513:
case 2239:
case 1100:
case 3254:
case 1333:
case 2294:
case 1328:
case 745:
case 3475:
case 1745:
case 4079:
case 734:
case 2283:
case 1251:
case 2526:
case 3270:
case 28:
case 516:
case 3149:
case 134:
case 2974:
case 318:
case 1005:
case 1569:
case 1829:
case 804:
case 159:
case 1084:
case 2855:
case 2339:
case 3718:
case 3771:
case 2394:
case 3506:
case 1519:
case 1750:
case 3463:
case 605:
case 2816:
case 206:
case 663:
case 3694:
case 3059:
case 1447:
case 3986:
case 2099:
case 3476:
case 1311:
case 2133:
case 1378:
case 2300:
case 2047:
case 2531:
case 3425:
case 930:
case 996:
case 3600:
case 3264:
case 1367:
case 1724:
case 2405:
case 3320:
case 991:
case 1581:
case 3191:
case 741:
case 2151:
case 962:
case 3214:
case 1901:
case 2873:
case 1361:
case 1812:
case 570:
case 91:
case 141:
case 1217:
case 816:
case 3727:
case 553:
case 2493:
case 3453:
case 263:
case 606:
case 180:
case 2200:
case 1278:
case 309:
case 1139:
case 504:
case 2664:
case 601:
case 2707:
case 3896:
case 1261:
case 3019:
case 768:
case 1006:
case 68:
case 515:
case 2576:
case 2701:
case 3782:
case 3431:
case 2865:
case 168:
case 811:
case 2525:
case 2603:
case 49:
case 1833:
case 1828:
case 1568:
case 3769:
case 3303:
case 3148:
case 3963:
case 1388:
case 1060:
case 411:
case 3486:
case 1947:
case 3027:
case 3130:
case 3640:
case 2098:
case 3058:
case 3913:
case 2266:
case 3082:
case 3870:
case 22:
case 1851:
case 416:
case 671:
case 2474:
case 1229:
case 1857:
case 2590:
case 2323:
case 1536:
case 3574:
case 4067:
case 3490:
case 1115:
case 1252:
case 3854:
case 6:
case 2894:
case 210:
case 3616:
case 2839:
case 1156:
case 2355:
case 167:
case 1329:
case 500:
case 36:
case 3666:
case 2179:
case 4011:
case 3545:
case 184:
case 3655:
case 1024:
case 2695:
case 767:
case 4017:
case 3035:
case 3078:
case 1818:
case 1269:
case 129:
case 2187:
case 1641:
case 46:
case 3850:
case 1557:
case 2181:
case 989:
case 2275:
case 1153:
case 2454:
case 823:
case 643:
case 729:
case 2583:
case 3663:
case 1551:
case 412:
case 3570:
case 3439:
case 1043:
case 3067:
case 1020:
case 3206:
case 1868:
case 1528:
case 2122:
case 672:
case 1372:
case 3061:
case 1176:
case 619:
case 3134:
case 1589:
case 2792:
case 4082:
case 1703:
case 3199:
case 754:
case 2326:
case 1125:
case 3788:
case 765:
case 139:
case 2263:
case 809:
case 3626:
case 2594:
case 3306:
case 1319:
case 3554:
case 39:
case 3966:
case 197:
case 2213:
case 4021:
case 3483:
case 1491:
case 2344:
case 2606:
case 3874:
case 3955:
case 4027:
case 2995:
case 3580:
case 1512:
case 2118:
case 2660:
case 1321:
case 2204:
case 3415:
case 4019:
case 1190:
case 2853:
case 3893:
case 1881:
case 2092:
case 3052:
case 1764:
case 2177:
case 1003:
case 966:
case 3088:
case 1382:
case 433:
case 2496:
case 3456:
case 992:
case 3310:
case 2749:
case 961:
case 742:
case 2837:
case 2168:
case 1562:
case 2943:
case 1698:
case 2920:
case 3465:
case 2831:
case 2009:
case 3604:
case 3717:
case 1859:
case 3685:
case 2825:
case 517:
case 2556:
case 2304:
case 65:
case 2232:
case 3711:
case 2914:
case 798:
case 3884:
case 1949:
case 423:
case 3210:
case 750:
case 1743:
case 2480:
case 1335:
case 198:
case 3324:
case 1258:
case 1720:
case 812:
case 207:
case 695:
case 2262:
case 3086:
case 1460:
case 7:
case 50:
case 581:
case 857:
case 1:
case 2535:
case 3248:
case 2074:
case 426:
case 3679:
case 2407:
case 1984:
case 3737:
case 667:
case 2401:
case 1585:
case 388:
case 2212:
case 1129:
case 3731:
case 1410:
case 1504:
case 3598:
case 431:
case 2558:
case 3987:
case 3501:
case 1215:
case 963:
case 2817:
case 3348:
case 2630:
case 1993:
case 3507:
case 1800:
case 220:
case 2902:
case 2050:
case 2138:
case 458:
case 2279:
case 2521:
case 4039:
case 1373:
case 2140:
case 2784:
case 1256:
case 1042:
case 540:
case 436:
case 490:
case 322:
case 914:
case 1680:
case 4073:
case 1544:
case 2228:
case 706:
case 2750:
case 3164:
case 836:
case 1945:
case 3025:
case 106:
case 3472:
case 3291:
case 1742:
case 3114:
case 364:
case 1283:
case 18:
case 1866:
case 1526:
case 101:
case 2389:
case 535:
case 234:
case 92:
case 2005:
case 2257:
case 1974:
case 2569:
case 2829:
case 3689:
case 2084:
case 259:
case 3892:
case 646:
case 826:
case 2093:
case 3633:
case 1950:
case 910:
case 1117:
case 1239:
case 1513:
case 1178:
case 4056:
case 1111:
case 1294:
case 3977:
case 2745:
case 93:
case 224:
case 3651:
case 1823:
case 3397:
case 2357:
case 3547:
case 485:
case 1161:
case 0:
case 3031:
case 1840:
case 3391:
case 3968:
case 3657:
case 641:
case 3143:
case 3037:
case 1167:
case 1406:
case 2185:
case 2271:
case 3452:
case 3146:
case 2104:
case 1555:
case 289:
case 4031:
case 1403:
case 537:
case 1826:
case 1566:
case 1645:
case 4037:
case 357:
case 1875:
case 1516:
case 3509:
case 3124:
case 4053:
case 2336:
case 1135:
case 449:
case 2770:
case 599:
case 102:
case 1844:
case 977:
case 2096:
case 3989:
case 3056:
case 1674:
case 702:
case 3671:
case 464:
case 2377:
case 3933:
case 1650:
case 3928:
case 1048:
case 487:
case 1030:
case 3160:
case 3618:
case 673:
case 2371:
case 1286:
case 1538:
case 1540:
case 3739:
case 3847:
case 2318:
case 1121:
case 2080:
case 1813:
case 2368:
case 2991:
case 642:
case 2552:
case 1158:
case 3429:
case 3342:
case 413:
case 1182:
case 3668:
case 3110:
case 603:
case 266:
case 358:
case 3094:
case 2054:
case 3659:
case 119:
case 3039:
case 1804:
case 3417:
case 1169:
case 1325:
case 336:
case 390:
case 2359:
case 3478:
case 422:
case 1748:
case 719:
case 1376:
case 1253:
case 331:
case 1996:
case 1237:
case 3979:
case 2835:
case 887:
case 551:
case 2144:
case 3773:
case 1231:
case 1443:
case 1420:
case 3106:
case 3467:
case 3302:
case 993:
case 2381:
case 3715:
case 3234:
case 2948:
case 2930:
case 2821:
case 1693:
case 143:
case 1414:
case 1172:
case 2578:
case 1500:
case 2796:
case 3807:
case 772:
case 2511:
case 1097:
case 2449:
case 3801:
case 2858:
case 248:
case 460:
case 1008:
case 2070:
case 172:
case 2882:
case 4032:
case 2319:
case 3723:
case 3740:
case 2408:
case 1539:
case 297:
case 838:
case 1344:
case 708:
case 692:
case 2014:
case 856:
case 1995:
case 2589:
case 1375:
case 265:
case 564:
case 3433:
case 666:
case 203:
case 1159:
case 851:
case 2125:
case 3247:
case 2369:
case 2909:
case 2043:
case 3766:
case 3842:
case 499:
case 177:
case 2137:
case 344:
case 2528:
case 4085:
case 1313:
case 2131:
case 648:
case 2992:
case 2269:
case 2818:
case 325:
case 229:
case 95:
case 3988:
case 1363:
case 2557:
case 2871:
case 3193:
case 1275:
case 3341:
case 1454:
case 2877:
case 1583:
case 1226:
case 250:
case 972:
case 3635:
case 3055:
case 707:
case 2743:
case 3412:
case 298:
case 2258:
case 3298:
case 3201:
case 107:
case 560:
case 1515:
case 2720:
case 1009:
case 689:
case 3834:
case 3462:
case 3899:
case 1646:
case 386:
case 352:
case 588:
case 3700:
case 2448:
case 1304:
case 428:
case 1232:
case 2186:
case 2430:
case 1496:
case 2382:
case 2235:
case 4026:
case 3398:
case 451:
case 2358:
case 1749:
case 4075:
case 3479:
case 3530:
case 1610:
case 3658:
case 2698:
case 3307:
case 1660:
case 2321:
case 1573:
case 3627:
case 4044:
case 1204:
case 3150:
case 2190:
case 1332:
case 1285:
case 522:
case 2881:
case 1853:
case 2764:
case 340:
case 3911:
case 1177:
case 273:
case 2003:
case 971:
case 2649:
case 1856:
case 2261:
case 558:
case 2879:
case 1798:
case 590:
case 3422:
case 1701:
case 440:
case 2710:
case 1525:
case 382:
case 356:
case 2559:
case 714:
case 3599:
case 869:
case 351:
case 3075:
case 705:
case 835:
case 1493:
case 976:
case 2194:
case 280:
case 4040:
case 1200:
case 1664:
case 2402:
case 4016:
case 2724:
case 2367:
case 526:
case 2581:
case 2907:
case 87:
case 1553:
case 1484:
case 624:
case 3502:
case 3170:
case 486:
case 1151:
case 3013:
case 1873:
case 2901:
case 1620:
case 2812:
case 2998:
case 1643:
case 328:
case 241:
case 1910:
case 825:
case 645:
case 2434:
case 9:
case 3785:
case 3459:
case 3927:
case 2499:
case 4055:
case 1047:
case 1960:
case 246:
case 40:
case 3848:
case 4066:
case 521:
case 3678:
case 481:
case 1041:
case 3713:
case 3196:
case 2442:
case 425:
case 267:
case 61:
case 3468:
case 1695:
case 2024:
case 337:
case 2889:
case 691:
case 80:
case 13:
case 1366:
case 3919:
case 1906:
case 47:
case 2536:
case 2288:
case 3309:
case 594:
case 2115:
case 2252:
case 3471:
case 1741:
case 2046:
case 3763:
case 2609:
case 1839:
case 3004:
case 3972:
case 1001:
case 3808:
case 12:
case 901:
case 1007:
case 1474:
case 1112:
case 2706:
case 1338:
case 1590:
case 1603:
case 2828:
case 1162:
case 2833:
case 2941:
case 2692:
case 840:
case 3542:
case 3775:
case 775:
case 3392:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750978802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,];
var gg_b = "1750978802/";

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
