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
case 2355:
case 2614:
case 3473:
case 2503:
case 1884:
case 2878:
case 247:
case 3174:
case 2643:
case 364:
case 1387:
case 3594:
case 3780:
case 104:
case 2764:
case 2726:
case 1114:
case 3455:
case 2373:
case 1444:
case 1143:
case 4024:
case 4066:
case 1964:
case 1413:
case 4011:
case 4000:
case 2422:
case 2831:
case 3274:
case 3999:
case 695:
case 1121:
case 2074:
case 921:
case 2485:
case 1950:
case 2294:
case 882:
case 2304:
case 154:
case 2846:
case 2003:
case 3719:
case 1457:
case 2807:
case 988:
case 239:
case 1069:
case 220:
case 3203:
case 3393:
case 2782:
case 863:
case 593:
case 3927:
case 3404:
case 373:
case 1982:
case 1158:
case 2574:
case 2486:
case 996:
case 944:
case 3898:
case 911:
case 478:
case 349:
case 1335:
case 902:
case 2240:
case 3538:
case 3932:
case 1566:
case 1511:
case 3459:
case 649:
case 2091:
case 3863:
case 286:
case 808:
case 2468:
case 3301:
case 1640:
case 3191:
case 1929:
case 460:
case 700:
case 1336:
case 2359:
case 1370:
case 298:
case 454:
case 600:
case 3983:
case 2410:
case 858:
case 2591:
case 1000:
case 815:
case 1011:
case 737:
case 1638:
case 3624:
case 1775:
case 3761:
case 4088:
case 3611:
case 1341:
case 1472:
case 3389:
case 2849:
case 952:
case 3716:
case 2953:
case 1066:
case 395:
case 142:
case 2271:
case 750:
case 91:
case 2138:
case 764:
case 532:
case 3337:
case 1671:
case 3142:
case 3665:
case 1776:
case 829:
case 2824:
case 2281:
case 1433:
case 1957:
case 1049:
case 3081:
case 3509:
case 1450:
case 1842:
case 3649:
case 1786:
case 156:
case 399:
case 579:
case 2634:
case 1785:
case 2986:
case 638:
case 3228:
case 1482:
case 3427:
case 543:
case 2757:
case 819:
case 2551:
case 2713:
case 1425:
case 3009:
case 591:
case 2399:
case 106:
case 2209:
case 3956:
case 492:
case 1891:
case 913:
case 1380:
case 876:
case 3581:
case 1722:
case 1549:
case 3151:
case 2663:
case 366:
case 3251:
case 2051:
case 645:
case 3499:
case 177:
case 2528:
case 923:
case 1913:
case 1464:
case 3739:
case 4046:
case 345:
case 3858:
case 2790:
case 3375:
case 1007:
case 1046:
case 1972:
case 3723:
case 3560:
case 1578:
case 1198:
case 3607:
case 2430:
case 3646:
case 2062:
case 477:
case 771:
case 1654:
case 671:
case 3162:
case 2254:
case 3376:
case 2698:
case 3054:
case 2772:
case 1531:
case 406:
case 2105:
case 2247:
case 2118:
case 2383:
case 338:
case 284:
case 2968:
case 2396:
case 699:
case 2562:
case 3814:
case 3678:
case 3047:
case 1507:
case 37:
case 1606:
case 3821:
case 3284:
case 86:
case 1078:
case 2084:
case 3483:
case 1618:
case 1605:
case 2901:
case 2888:
case 2160:
case 3184:
case 3496:
case 456:
case 3554:
case 3018:
case 965:
case 1429:
case 3736:
case 3770:
case 2417:
case 2205:
case 2395:
case 2218:
case 1199:
case 4075:
case 58:
case 353:
case 3859:
case 3463:
case 246:
case 2868:
case 3914:
case 1652:
case 789:
case 2180:
case 458:
case 1579:
case 3943:
case 2550:
case 2280:
case 3264:
case 3125:
case 2064:
case 174:
case 3080:
case 1451:
case 804:
case 2810:
case 1680:
case 2152:
case 2801:
case 1974:
case 4076:
case 2582:
case 1299:
case 4030:
case 2334:
case 2050:
case 408:
case 2525:
case 2119:
case 2837:
case 4017:
case 1872:
case 3552:
case 303:
case 3958:
case 1127:
case 1227:
case 3282:
case 1428:
case 3434:
case 182:
case 213:
case 1769:
case 3133:
case 4048:
case 2889:
case 3580:
case 2526:
case 3150:
case 3902:
case 1196:
case 2478:
case 770:
case 1295:
case 1318:
case 1183:
case 1553:
case 3331:
case 2632:
case 935:
case 1677:
case 1048:
case 3129:
case 1530:
case 1844:
case 878:
case 3378:
case 1017:
case 2791:
case 3855:
case 2597:
case 2683:
case 3767:
case 368:
case 2029:
case 3561:
case 1283:
case 3617:
case 1195:
case 972:
case 3516:
case 2177:
case 518:
case 555:
case 703:
case 108:
case 3740:
case 1306:
case 2911:
case 1615:
case 3197:
case 3345:
case 2885:
case 1608:
case 2900:
case 1942:
case 1548:
case 736:
case 1857:
case 125:
case 2446:
case 1053:
case 2966:
case 2215:
case 636:
case 948:
case 3676:
case 1765:
case 3630:
case 2445:
case 2108:
case 3804:
case 753:
case 2965:
case 505:
case 1711:
case 1700:
case 3498:
case 2742:
case 3307:
case 984:
case 3257:
case 46:
case 1403:
case 2949:
case 157:
case 2728:
case 833:
case 2057:
case 509:
case 2876:
case 2513:
case 2875:
case 351:
case 1093:
case 1220:
case 2544:
case 1086:
case 130:
case 269:
case 3693:
case 856:
case 3934:
case 1204:
case 1394:
case 1749:
case 2620:
case 947:
case 3443:
case 877:
case 2239:
case 3113:
case 211:
case 559:
case 2673:
case 1155:
case 3414:
case 1585:
case 3144:
case 3039:
case 3832:
case 3421:
case 75:
case 3895:
case 910:
case 517:
case 1639:
case 65:
case 2557:
case 622:
case 4089:
case 2488:
case 161:
case 2287:
case 3087:
case 712:
case 2321:
case 3244:
case 3709:
case 1829:
case 221:
case 3213:
case 2139:
case 2817:
case 176:
case 1586:
case 2907:
case 734:
case 3190:
case 2123:
case 2072:
case 634:
case 1037:
case 1745:
case 1112:
case 3365:
case 461:
case 1442:
case 1850:
case 2879:
case 3570:
case 562:
case 1962:
case 2141:
case 3637:
case 2411:
case 3324:
case 1338:
case 3592:
case 1089:
case 767:
case 3041:
case 2762:
case 3535:
case 1212:
case 3827:
case 1510:
case 583:
case 35:
case 2465:
case 1501:
case 322:
case 2612:
case 1882:
case 202:
case 3290:
case 1746:
case 1641:
case 2945:
case 3311:
case 2192:
case 2270:
case 3705:
case 1825:
case 3718:
case 2135:
case 1068:
case 1491:
case 4093:
case 2659:
case 1636:
case 429:
case 1731:
case 2572:
case 2590:
case 1001:
case 419:
case 785:
case 1010:
case 22:
case 4085:
case 1635:
case 3899:
case 2784:
case 3523:
case 3610:
case 1864:
case 3092:
case 3747:
case 2136:
case 1159:
case 3541:
case 3942:
case 1345:
case 2230:
case 674:
case 4080:
case 3053:
case 2532:
case 99:
case 1577:
case 3765:
case 1676:
case 3857:
case 2253:
case 1738:
case 315:
case 3724:
case 2971:
case 358:
case 2153:
case 2454:
case 2697:
case 4052:
case 1061:
case 453:
case 2130:
case 1297:
case 1820:
case 3700:
case 895:
case 1346:
case 1077:
case 1648:
case 3183:
case 2940:
case 3553:
case 1902:
case 1873:
case 1515:
case 2967:
case 3530:
case 1129:
case 2117:
case 3991:
case 1856:
case 1331:
case 4019:
case 281:
case 403:
case 1561:
case 763:
case 2217:
case 1229:
case 1378:
case 3017:
case 663:
case 308:
case 3132:
case 1740:
case 3296:
case 3306:
case 2083:
case 587:
case 2887:
case 3195:
case 1617:
case 3079:
case 991:
case 363:
case 2633:
case 916:
case 2279:
case 1250:
case 2994:
case 1552:
case 1958:
case 103:
case 1182:
case 3127:
case 1679:
case 1233:
case 2481:
case 849:
case 3872:
case 2758:
case 1133:
case 3769:
case 2027:
case 1019:
case 1282:
case 2823:
case 1434:
case 3428:
case 800:
case 1150:
case 4077:
case 2682:
case 926:
case 3619:
case 3788:
case 2625:
case 1921:
case 1052:
case 615:
case 3652:
case 1164:
case 2409:
case 3579:
case 1943:
case 2836:
case 2351:
case 4016:
case 979:
case 594:
case 850:
case 2892:
case 2743:
case 1226:
case 2714:
case 943:
case 2626:
case 3974:
case 3451:
case 1519:
case 725:
case 730:
case 2947:
case 3068:
case 2059:
case 1070:
case 2268:
case 2906:
case 630:
case 3259:
case 629:
case 1718:
case 1705:
case 3825:
case 3636:
case 552:
case 3670:
case 3537:
case 3984:
case 52:
case 3731:
case 2101:
case 2440:
case 2852:
case 2110:
case 975:
case 2210:
case 838:
case 2391:
case 51:
case 657:
case 10:
case 3010:
case 932:
case 3159:
case 1541:
case 1610:
case 3340:
case 3864:
case 2880:
case 1706:
case 1092:
case 36:
case 719:
case 2905:
case 1601:
case 2512:
case 112:
case 3037:
case 2237:
case 761:
case 401:
case 2438:
case 1272:
case 283:
case 94:
case 1190:
case 3833:
case 2559:
case 3962:
case 3568:
case 4087:
case 3371:
case 3850:
case 1041:
case 3212:
case 3623:
case 1535:
case 262:
case 1592:
case 4039:
case 1300:
case 3746:
case 1172:
case 3641:
case 1689:
case 2819:
case 3510:
case 122:
case 607:
case 2342:
case 3155:
case 167:
case 4023:
case 1963:
case 1388:
case 45:
case 1113:
case 3639:
case 4041:
case 2073:
case 2122:
case 1832:
case 1421:
case 3273:
case 588:
case 1087:
case 3022:
case 3951:
case 3173:
case 2504:
case 2222:
case 3474:
case 361:
case 993:
case 2055:
case 2763:
case 412:
case 2520:
case 3687:
case 511:
case 3593:
case 3829:
case 1709:
case 866:
case 3255:
case 2734:
case 240:
case 357:
case 1685:
case 4092:
case 1458:
case 1539:
case 3120:
case 2494:
case 2657:
case 2186:
case 76:
case 40:
case 2293:
case 2303:
case 330:
case 2020:
case 2555:
case 2185:
case 924:
case 3897:
case 151:
case 3093:
case 3220:
case 1369:
case 3928:
case 4070:
case 3522:
case 3204:
case 1157:
case 1624:
case 1567:
case 3638:
case 1666:
case 2211:
case 3323:
case 232:
case 3000:
case 3011:
case 2165:
case 2642:
case 3066:
case 195:
case 1038:
case 2915:
case 3341:
case 1389:
case 2224:
case 889:
case 1600:
case 1716:
case 3065:
case 3753:
case 731:
case 2423:
case 342:
case 3828:
case 704:
case 3671:
case 464:
case 3776:
case 1142:
case 2961:
case 2100:
case 2441:
case 604:
case 2372:
case 2111:
case 3997:
case 1337:
case 3524:
case 1538:
case 3202:
case 1932:
case 449:
case 1040:
case 378:
case 598:
case 2977:
case 3335:
case 868:
case 1291:
case 1301:
case 473:
case 3640:
case 1310:
case 2470:
case 1863:
case 1459:
case 2436:
case 2492:
case 660:
case 2435:
case 1191:
case 400:
case 760:
case 2732:
case 1571:
case 1983:
case 24:
case 2795:
case 3370:
case 3336:
case 4094:
case 1996:
case 3851:
case 3102:
case 1669:
case 3950:
case 354:
case 2727:
case 3933:
case 293:
case 2058:
case 1203:
case 1393:
case 100:
case 2269:
case 3258:
case 510:
case 917:
case 3457:
case 3694:
case 539:
case 1927:
case 3982:
case 1404:
case 173:
case 2854:
case 678:
case 2919:
case 1385:
case 149:
case 4040:
case 3779:
case 73:
case 1420:
case 803:
case 63:
case 2:
case 3569:
case 2021:
case 642:
case 164:
case 331:
case 742:
case 3884:
case 2344:
case 2860:
case 836:
case 4071:
case 2806:
case 909:
case 3214:
case 3387:
case 2847:
case 2014:
case 224:
case 3243:
case 3926:
case 4038:
case 495:
case 2980:
case 2674:
case 3413:
case 241:
case 2805:
case 1688:
case 3444:
case 137:
case 1752:
case 3121:
case 3088:
case 2288:
case 2936:
case 1814:
case 3660:
case 2684:
case 1047:
case 733:
case 138:
case 3647:
case 3078:
case 1060:
case 2477:
case 3710:
case 17:
case 3606:
case 3701:
case 1821:
case 1432:
case 2278:
case 3031:
case 1554:
case 905:
case 29:
case 1483:
case 2231:
case 3618:
case 1348:
case 1770:
case 1736:
case 3768:
case 756:
case 2935:
case 584:
case 1005:
case 1018:
case 3377:
case 2992:
case 656:
case 777:
case 928:
case 2397:
case 2145:
case 1560:
case 3972:
case 3803:
case 2415:
case 3578:
case 2408:
case 1858:
case 145:
case 3361:
case 677:
case 1375:
case 1547:
case 85:
case 1646:
case 3316:
case 2894:
case 3789:
case 1262:
case 1506:
case 466:
case 3497:
case 3654:
case 1645:
case 2941:
case 1162:
case 2461:
case 812:
case 2098:
case 1505:
case 3737:
case 2416:
case 1054:
case 2146:
case 2923:
case 1376:
case 4009:
case 1330:
case 918:
case 2107:
case 955:
case 306:
case 834:
case 1956:
case 2063:
case 2867:
case 3425:
case 226:
case 1973:
case 792:
case 166:
case 801:
case 2840:
case 2452:
case 2326:
case 377:
case 2534:
case 867:
case 2325:
case 1251:
case 3163:
case 2756:
case 3944:
case 1955:
case 291:
case 3913:
case 3352:
case 2480:
case 3426:
case 3957:
case 851:
case 3049:
case 3134:
case 98:
case 243:
case 3433:
case 4018:
case 3319:
case 2720:
case 2563:
case 356:
case 3786:
case 3793:
case 3785:
case 333:
case 199:
case 2333:
case 4047:
case 2419:
case 2149:
case 438:
case 2350:
case 4006:
case 1904:
case 2523:
case 3784:
case 2899:
case 3931:
case 2760:
case 3590:
case 2541:
case 3136:
case 2747:
case 1512:
case 1918:
case 2706:
case 2610:
case 1880:
case 1059:
case 2036:
case 2070:
case 2705:
case 56:
case 1467:
case 1906:
case 4004:
case 1268:
case 3192:
case 1960:
case 3978:
case 4020:
case 3659:
case 669:
case 31:
case 1852:
case 1440:
case 1101:
case 769:
case 409:
case 611:
case 796:
case 2535:
case 3762:
case 3241:
case 427:
case 2998:
case 2324:
case 2689:
case 1137:
case 2311:
case 3945:
case 2023:
case 1954:
case 302:
case 3223:
case 1342:
case 1471:
case 222:
case 3090:
case 3465:
case 3072:
case 1438:
case 3424:
case 2272:
case 183:
case 3907:
case 1237:
case 1672:
case 3411:
case 1189:
case 1559:
case 2536:
case 2570:
case 1798:
case 826:
case 3655:
case 900:
case 507:
case 1644:
case 3314:
case 2883:
case 1504:
case 1222:
case 3343:
case 3139:
case 2622:
case 201:
case 2709:
case 3321:
case 2039:
case 2144:
case 396:
case 267:
case 2414:
case 3673:
case 576:
case 949:
case 2113:
case 344:
case 3239:
case 1909:
case 1122:
case 891:
case 3187:
case 3656:
case 2895:
case 462:
case 561:
case 2421:
case 602:
case 816:
case 127:
case 1185:
case 1555:
case 843:
case 2369:
case 109:
case 519:
case 251:
case 3604:
case 1816:
case 950:
case 2587:
case 557:
case 879:
case 4059:
case 2934:
case 2781:
case 1004:
case 71:
case 964:
case 369:
case 752:
case 3057:
case 3728:
case 1808:
case 1981:
case 1573:
case 3853:
case 3469:
case 2458:
case 285:
case 62:
case 529:
case 530:
case 3876:
case 3965:
case 2675:
case 2804:
case 97:
case 832:
case 1697:
case 1362:
case 3108:
case 3445:
case 938:
case 2307:
case 2297:
case 646:
case 3893:
case 3886:
case 694:
case 1175:
case 2653:
case 365:
case 48:
case 3161:
case 3900:
case 1276:
case 2197:
case 2630:
case 2577:
case 3407:
case 105:
case 3924:
case 2771:
case 1532:
case 3398:
case 3966:
case 3208:
case 3446:
case 2008:
case 2015:
case 3116:
case 1595:
case 1148:
case 2561:
case 3029:
case 181:
case 1405:
case 2767:
case 2855:
case 490:
case 2378:
case 2229:
case 945:
case 1629:
case 3177:
case 723:
case 1887:
case 1096:
case 1702:
case 3431:
case 1940:
case 118:
case 1032:
case 155:
case 2648:
case 713:
case 2508:
case 2902:
case 1460:
case 2873:
case 3632:
case 84:
case 1447:
case 2331:
case 1839:
case 1027:
case 3219:
case 687:
case 313:
case 3082:
case 270:
case 2282:
case 1599:
case 1823:
case 787:
case 2019:
case 2812:
case 1682:
case 2150:
case 3526:
case 2580:
case 418:
case 971:
case 2794:
case 893:
case 1841:
case 3525:
case 1633:
case 3050:
case 1279:
case 2250:
case 1994:
case 481:
case 2182:
case 3033:
case 2552:
case 323:
case 190:
case 2233:
case 3837:
case 2080:
case 3064:
case 1743:
case 1835:
case 1714:
case 3699:
case 3280:
case 1721:
case 18:
case 1626:
case 1527:
case 3810:
case 2519:
case 236:
case 1625:
case 2921:
case 3533:
case 814:
case 2943:
case 2914:
case 2225:
case 346:
case 1351:
case 1870:
case 2463:
case 2859:
case 1178:
case 2496:
case 479:
case 2483:
case 1231:
case 19:
case 1935:
case 3218:
case 3395:
case 3147:
case 3106:
case 443:
case 1992:
case 1598:
case 2005:
case 2018:
case 2678:
case 2814:
case 2735:
case 1970:
case 1936:
case 3206:
case 238:
case 3383:
case 989:
case 3118:
case 3105:
case 3084:
case 1131:
case 1329:
case 1278:
case 27:
case 1477:
case 883:
case 3989:
case 2912:
case 1098:
case 2353:
case 335:
case 1461:
case 3772:
case 1923:
case 1416:
case 1107:
case 2376:
case 3254:
case 697:
case 3154:
case 180:
case 3584:
case 592:
case 3869:
case 1246:
case 2858:
case 245:
case 1894:
case 3062:
case 2646:
case 2547:
case 1712:
case 3476:
case 2262:
case 2607:
case 968:
case 772:
case 3528:
case 3051:
case 3922:
case 1773:
case 672:
case 2251:
case 1325:
case 903:
case 1651:
case 480:
case 2739:
case 1756:
case 3109:
case 1480:
case 191:
case 1755:
case 1939:
case 3209:
case 3399:
case 817:
case 2009:
case 271:
case 1867:
case 735:
case 266:
case 970:
case 3663:
case 397:
case 2581:
case 1452:
case 2920:
case 684:
case 1628:
case 1333:
case 3993:
case 1149:
case 3028:
case 1034:
case 3181:
case 953:
case 2904:
case 648:
case 2128:
case 809:
case 936:
case 748:
case 3281:
case 1249:
case 1704:
case 3800:
case 1720:
case 2649:
case 3985:
case 49:
case 2509:
case 647:
case 2071:
case 3138:
case 4043:
case 747:
case 1265:
case 4014:
case 1916:
case 2708:
case 4:
case 2665:
case 1961:
case 2142:
case 1100:
case 805:
case 1390:
case 3042:
case 3930:
case 2666:
case 2567:
case 132:
case 3591:
case 90:
case 2540:
case 2716:
case 2600:
case 3849:
case 1224:
case 2611:
case 1881:
case 1266:
case 3917:
case 1435:
case 14:
case 739:
case 720:
case 3401:
case 2996:
case 639:
case 1795:
case 2932:
case 610:
case 2040:
case 95:
case 1783:
case 3240:
case 2067:
case 3542:
case 3729:
case 1809:
case 2301:
case 2291:
case 3948:
case 386:
case 3091:
case 1436:
case 3602:
case 3733:
case 1169:
case 2927:
case 2385:
case 3845:
case 1854:
case 686:
case 3750:
case 2898:
case 554:
case 1357:
case 560:
case 901:
case 1543:
case 3979:
case 3304:
case 3294:
case 2669:
case 3658:
case 3485:
case 1603:
case 1514:
case 3782:
case 2393:
case 2203:
case 193:
case 320:
case 1521:
case 934:
case 3807:
case 1727:
case 2719:
case 2386:
case 3320:
case 1269:
case 200:
case 1805:
case 3725:
case 1674:
case 114:
case 3373:
case 2455:
case 3074:
case 2274:
case 3831:
case 3422:
case 432:
case 1288:
case 1487:
case 264:
case 1952:
case 1021:
case 2174:
case 1:
case 347:
case 3878:
case 1799:
case 2473:
case 1344:
case 3621:
case 3726:
case 951:
case 3764:
case 2780:
case 2594:
case 1014:
case 1993:
case 1986:
case 4084:
case 3628:
case 1865:
case 484:
case 2234:
case 3034:
case 1866:
case 1281:
case 2433:
case 343:
case 3704:
case 69:
case 1327:
case 974:
case 599:
case 2842:
case 2450:
case 2793:
case 1479:
case 448:
case 256:
case 3563:
case 2319:
case 869:
case 1811:
case 1985:
case 680:
case 896:
case 3325:
case 3987:
case 811:
case 3534:
case 277:
case 844:
case 3773:
case 566:
case 1051:
case 1109:
case 571:
case 3651:
case 472:
case 2163:
case 326:
case 2425:
case 3867:
case 3755:
case 3063:
case 3939:
case 2891:
case 1744:
case 1209:
case 1399:
case 435:
case 821:
case 726:
case 135:
case 2298:
case 497:
case 1989:
case 2497:
case 545:
case 3923:
case 2531:
case 2737:
case 1453:
case 1790:
case 3408:
case 3415:
case 1154:
case 2972:
case 2046:
case 1584:
case 3397:
case 1937:
case 3712:
case 616:
case 791:
case 0:
case 3894:
case 2789:
case 4051:
case 716:
case 3231:
case 2874:
case 57:
case 1910:
case 39:
case 743:
case 3178:
case 2031:
case 3992:
case 1106:
case 3598:
case 1332:
case 538:
case 1395:
case 1147:
case 1205:
case 81:
case 2768:
case 679:
case 1417:
case 1448:
case 184:
case 1383:
case 852:
case 1247:
case 2660:
case 1562:
case 1396:
case 1968:
case 1206:
case 3278:
case 2507:
case 2546:
case 1084:
case 2444:
case 3805:
case 341:
case 919:
case 2413:
case 632:
case 314:
case 2143:
case 894:
case 3288:
case 957:
case 550:
case 3487:
case 4042:
case 564:
case 2088:
case 846:
case 2221:
case 147:
case 3860:
case 3799:
case 675:
case 231:
case 775:
case 3313:
case 3021:
case 3952:
case 2569:
case 3:
case 3439:
case 537:
case 2214:
case 1726:
case 1764:
case 500:
case 3919:
case 110:
case 3854:
case 486:
case 3169:
case 1733:
case 2158:
case 1574:
case 2982:
case 3357:
case 823:
case 3514:
case 976:
case 3603:
case 1304:
case 1294:
case 3543:
case 2694:
case 1320:
case 74:
case 393:
case 1782:
case 3521:
case 139:
case 2069:
case 961:
case 1917:
case 2748:
case 420:
case 439:
case 3492:
case 2929:
case 2851:
case 2336:
case 2370:
case 793:
case 2565:
case 1410:
case 198:
case 1401:
case 1240:
case 3002:
case 3691:
case 278:
case 2524:
case 186:
case 1468:
case 3436:
case 3470:
case 410:
case 1602:
case 1267:
case 2511:
case 23:
case 865:
case 2828:
case 3423:
case 6:
case 3166:
case 2753:
case 2490:
case 375:
case 1138:
case 595:
case 2997:
case 724:
case 3372:
case 3100:
case 447:
case 3961:
case 2730:
case 624:
case 1975:
case 2671:
case 1797:
case 2011:
case 2000:
case 1591:
case 614:
case 332:
case 2323:
case 741:
case 3200:
case 4074:
case 2638:
case 2472:
case 1849:
case 3908:
case 3915:
case 2066:
case 1171:
case 1953:
case 1312:
case 3165:
case 2220:
case 3861:
case 1358:
case 1875:
case 1604:
case 229:
case 3303:
case 2086:
case 3004:
case 169:
case 1620:
case 2394:
case 2522:
case 3808:
case 1728:
case 3734:
case 3573:
case 1949:
case 1830:
case 3193:
case 1876:
case 219:
case 551:
case 3285:
case 2085:
case 3494:
case 452:
case 3556:
case 783:
case 2474:
case 3222:
case 1343:
case 3504:
case 2951:
case 2022:
case 683:
case 3644:
case 1013:
case 2255:
case 954:
case 897:
case 2829:
case 359:
case 1321:
case 4072:
case 2156:
case 960:
case 1817:
case 3055:
case 121:
case 4090:
case 2256:
case 501:
case 144:
case 402:
case 196:
case 2585:
case 2155:
case 3877:
case 2273:
case 327:
case 1751:
case 1187:
case 1656:
case 872:
case 93:
case 2338:
case 3690:
case 362:
case 2089:
case 1223:
case 1612:
case 2882:
case 1090:
case 2501:
case 3471:
case 444:
case 2707:
case 978:
case 727:
case 2510:
case 3819:
case 2641:
case 512:
case 496:
case 2746:
case 102:
case 627:
case 617:
case 55:
case 3438:
case 3237:
case 717:
case 835:
case 1123:
case 4044:
case 1946:
case 2442:
case 1879:
case 488:
case 2371:
case 2112:
case 3672:
case 1411:
case 1141:
case 3559:
case 2010:
case 2367:
case 2692:
case 2001:
case 640:
case 152:
case 3201:
case 1931:
case 2635:
case 884:
case 1784:
case 3512:
case 1235:
case 3905:
case 3880:
case 2864:
case 1292:
case 1302:
case 1170:
case 709:
case 2825:
case 469:
case 1270:
case 3268:
case 3059:
case 848:
case 11:
case 3440:
case 3852:
case 2984:
case 1572:
case 2636:
case 942:
case 3835:
case 1280:
case 274:
case 2451:
case 3099:
case 2299:
case 2309:
case 3721:
case 1988:
case 1801:
case 38:
case 553:
case 3664:
case 3527:
case 536:
case 2199:
case 1533:
case 2788:
case 1774:
case 146:
case 3836:
case 2579:
case 3409:
case 1180:
case 194:
case 1025:
case 282:
case 718:
case 1219:
case 755:
case 503:
case 2769:
case 113:
case 3758:
case 1889:
case 2381:
case 1564:
case 3328:
case 3994:
case 681:
case 263:
case 781:
case 2079:
case 810:
case 1050:
case 123:
case 390:
case 1837:
case 728:
case 570:
case 3650:
case 2127:
case 1033:
case 628:
case 1696:
case 2017:
case 2360:
case 2844:
case 4033:
case 3217:
case 381:
case 3405:
case 3418:
case 2347:
case 3887:
case 790:
case 3096:
case 3702:
case 1822:
case 1431:
case 2283:
case 328:
case 2306:
case 4050:
case 690:
case 886:
case 208:
case 3629:
case 992:
case 1478:
case 2232:
case 3460:
case 2196:
case 2484:
case 2553:
case 2305:
case 2295:
case 2318:
case 3447:
case 3248:
case 3839:
case 3117:
case 2991:
case 2576:
case 413:
case 3406:
case 568:
case 3967:
case 1632:
case 3362:
case 446:
case 3596:
case 1445:
case 1216:
case 2661:
case 2766:
case 494:
case 258:
case 3153:
case 3971:
case 215:
case 1261:
case 2616:
case 2700:
case 2711:
case 1097:
case 2075:
case 1529:
case 3130:
case 1900:
case 2462:
case 2354:
case 1885:
case 2608:
case 2030:
case 225:
case 1116:
case 2857:
case 3595:
case 2765:
case 1407:
case 78:
case 1924:
case 3938:
case 305:
case 4064:
case 1966:
case 2053:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750410001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,];
var gg_b = "1750413601/";

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
