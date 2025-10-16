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
case 1348:
case 1908:
case 1029:
case 349:
case 3755:
case 2038:
case 2429:
case 545:
case 3720:
case 1438:
case 2215:
case 1686:
case 962:
case 297:
case 928:
case 1871:
case 3197:
case 781:
case 3962:
case 1550:
case 1546:
case 3793:
case 1885:
case 3421:
case 3232:
case 3639:
case 1245:
case 3603:
case 2610:
case 4012:
case 1368:
case 1052:
case 2748:
case 835:
case 2452:
case 2976:
case 122:
case 3497:
case 168:
case 2394:
case 3771:
case 1138:
case 2182:
case 1291:
case 1405:
case 3496:
case 3302:
case 3942:
case 3470:
case 1566:
case 2977:
case 3501:
case 40:
case 319:
case 3079:
case 3683:
case 526:
case 2882:
case 3277:
case 437:
case 2649:
case 585:
case 1120:
case 4091:
case 663:
case 2522:
case 540:
case 160:
case 3543:
case 1155:
case 2321:
case 1619:
case 3290:
case 1212:
case 2071:
case 1193:
case 3575:
case 2102:
case 1485:
case 3641:
case 402:
case 3581:
case 741:
case 2085:
case 1471:
case 524:
case 711:
case 1988:
case 4026:
case 3653:
case 2262:
case 2669:
case 588:
case 1002:
case 2852:
case 1607:
case 2093:
case 1171:
case 706:
case 830:
case 914:
case 63:
case 1493:
case 2396:
case 2559:
case 3563:
case 1185:
case 327:
case 2974:
case 4045:
case 4027:
case 920:
case 3915:
case 1420:
case 3118:
case 3349:
case 1753:
case 3576:
case 2878:
case 942:
case 1486:
case 1512:
case 3590:
case 118:
case 1311:
case 2086:
case 1884:
case 2060:
case 3281:
case 2110:
case 1487:
case 556:
case 369:
case 205:
case 3523:
case 2341:
case 2901:
case 1761:
case 2431:
case 2222:
case 3883:
case 4066:
case 3243:
case 695:
case 2682:
case 4080:
case 2087:
case 441:
case 15:
case 702:
case 1140:
case 683:
case 1638:
case 3916:
case 1783:
case 950:
case 1972:
case 1456:
case 115:
case 3670:
case 1264:
case 4047:
case 3696:
case 2040:
case 1854:
case 1330:
case 554:
case 3917:
case 977:
case 2361:
case 2259:
case 522:
case 4046:
case 3092:
case 3853:
case 148:
case 568:
case 357:
case 2869:
case 698:
case 4050:
case 2652:
case 3933:
case 1186:
case 1703:
case 1078:
case 1484:
case 3757:
case 1419:
case 2963:
case 958:
case 799:
case 1685:
case 3441:
case 3839:
case 1886:
case 964:
case 2084:
case 2217:
case 761:
case 3153:
case 3618:
case 3756:
case 481:
case 1527:
case 2831:
case 3704:
case 3483:
case 200:
case 1247:
case 140:
case 3161:
case 2216:
case 91:
case 634:
case 560:
case 89:
case 3011:
case 2339:
case 1106:
case 579:
case 2303:
case 3914:
case 955:
case 3787:
case 1392:
case 1406:
case 110:
case 3461:
case 809:
case 2006:
case 1280:
case 966:
case 613:
case 375:
case 1266:
case 2149:
case 3183:
case 1565:
case 1913:
case 124:
case 1407:
case 3453:
case 2981:
case 152:
case 70:
case 1267:
case 3141:
case 2810:
case 4044:
case 2728:
case 2602:
case 1857:
case 1184:
case 1937:
case 1441:
case 3225:
case 3703:
case 947:
case 2387:
case 3419:
case 1574:
case 3671:
case 2041:
case 3545:
case 2588:
case 3250:
case 3246:
case 2234:
case 2411:
case 2964:
case 1756:
case 326:
case 1704:
case 2386:
case 1740:
case 851:
case 3154:
case 707:
case 3106:
case 340:
case 1161:
case 490:
case 2679:
case 434:
case 3049:
case 3655:
case 2095:
case 3454:
case 2668:
case 3406:
case 1201:
case 2061:
case 1694:
case 4043:
case 3856:
case 413:
case 3620:
case 2111:
case 2731:
case 3804:
case 1030:
case 4075:
case 972:
case 1786:
case 2340:
case 324:
case 1760:
case 388:
case 3937:
case 897:
case 2430:
case 3119:
case 2892:
case 2053:
case 436:
case 1803:
case 3069:
case 1275:
case 2039:
case 3311:
case 1349:
case 1909:
case 1576:
case 604:
case 3512:
case 1028:
case 3486:
case 1707:
case 1590:
case 1281:
case 1103:
case 3819:
case 3244:
case 97:
case 2236:
case 3487:
case 169:
case 380:
case 1754:
case 3031:
case 35:
case 4001:
case 483:
case 345:
case 1883:
case 1243:
case 3404:
case 3783:
case 1369:
case 73:
case 2749:
case 3456:
case 3972:
case 3934:
case 223:
case 519:
case 1861:
case 1670:
case 3264:
case 1696:
case 3854:
case 170:
case 2128:
case 3741:
case 2354:
case 1139:
case 2950:
case 3457:
case 1719:
case 2306:
case 2492:
case 1917:
case 3186:
case 2925:
case 2778:
case 348:
case 498:
case 1092:
case 3807:
case 1263:
case 3838:
case 2536:
case 2965:
case 463:
case 1683:
case 1079:
case 3958:
case 637:
case 1418:
case 1277:
case 2235:
case 3770:
case 2018:
case 3155:
case 2479:
case 3796:
case 1575:
case 1821:
case 292:
case 967:
case 808:
case 2338:
case 3471:
case 783:
case 1048:
case 578:
case 43:
case 2305:
case 3988:
case 3002:
case 2630:
case 4032:
case 3493:
case 2926:
case 127:
case 1915:
case 1896:
case 805:
case 253:
case 3805:
case 1551:
case 1118:
case 3564:
case 3420:
case 2973:
case 959:
case 2729:
case 1068:
case 2782:
case 1755:
case 3227:
case 356:
case 3908:
case 699:
case 3687:
case 3029:
case 149:
case 903:
case 3438:
case 1818:
case 3547:
case 3794:
case 3105:
case 1720:
case 2021:
case 3525:
case 3686:
case 3226:
case 1274:
case 743:
case 3660:
case 3885:
case 1232:
case 3245:
case 1639:
case 3550:
case 931:
case 407:
case 2628:
case 1793:
case 2848:
case 1785:
case 2355:
case 3368:
case 1121:
case 1603:
case 4076:
case 3893:
case 771:
case 3567:
case 2924:
case 2912:
case 1497:
case 29:
case 3291:
case 4023:
case 4077:
case 3656:
case 3640:
case 3820:
case 3604:
case 800:
case 1501:
case 119:
case 2258:
case 2393:
case 3580:
case 2868:
case 3566:
case 3585:
case 2437:
case 3286:
case 3626:
case 1632:
case 3825:
case 2688:
case 3372:
case 79:
case 2347:
case 1316:
case 2907:
case 3444:
case 2325:
case 4061:
case 899:
case 3022:
case 529:
case 438:
case 2043:
case 271:
case 213:
case 861:
case 2834:
case 4095:
case 2346:
case 1443:
case 2579:
case 325:
case 2350:
case 2954:
case 103:
case 1143:
case 1801:
case 3555:
case 3691:
case 3256:
case 3866:
case 2568:
case 290:
case 234:
case 3240:
case 57:
case 3911:
case 3665:
case 1451:
case 243:
case 1594:
case 3520:
case 1309:
case 2367:
case 600:
case 949:
case 709:
case 2113:
case 3100:
case 2733:
case 3059:
case 1203:
case 1978:
case 1181:
case 435:
case 2063:
case 587:
case 384:
case 2366:
case 328:
case 2380:
case 2984:
case 2717:
case 1881:
case 517:
case 3425:
case 3336:
case 3167:
case 2813:
case 753:
case 3800:
case 3219:
case 4003:
case 3612:
case 3017:
case 298:
case 927:
case 1875:
case 314:
case 2759:
case 3992:
case 1314:
case 608:
case 3450:
case 1389:
case 3763:
case 2211:
case 423:
case 837:
case 3180:
case 1283:
case 1072:
case 2635:
case 1623:
case 496:
case 1843:
case 3751:
case 1034:
case 3538:
case 3447:
case 1851:
case 3505:
case 283:
case 3147:
case 3206:
case 295:
case 1570:
case 2722:
case 2789:
case 2608:
case 3743:
case 301:
case 3775:
case 3146:
case 3150:
case 3009:
case 3207:
case 344:
case 3928:
case 4039:
case 3781:
case 333:
case 2230:
case 1597:
case 1744:
case 2986:
case 547:
case 3467:
case 2960:
case 2364:
case 3015:
case 2636:
case 2158:
case 129:
case 2920:
case 3473:
case 841:
case 3191:
case 2835:
case 3968:
case 2637:
case 1675:
case 2032:
case 804:
case 3519:
case 3426:
case 723:
case 1088:
case 3335:
case 957:
case 3584:
case 1902:
case 2199:
case 3445:
case 23:
case 3600:
case 1876:
case 3824:
case 2074:
case 3812:
case 3776:
case 3145:
case 531:
case 3790:
case 1132:
case 187:
case 1712:
case 2985:
case 3126:
case 2530:
case 1297:
case 3205:
case 3491:
case 2742:
case 1058:
case 576:
case 3979:
case 3777:
case 4018:
case 873:
case 3554:
case 1595:
case 3173:
case 3127:
case 1270:
case 881:
case 2108:
case 559:
case 2435:
case 1477:
case 2905:
case 1765:
case 3647:
case 3827:
case 2023:
case 4070:
case 3285:
case 738:
case 3625:
case 3412:
case 1490:
case 2373:
case 1952:
case 1476:
case 3424:
case 3271:
case 2090:
case 2528:
case 3826:
case 1874:
case 3646:
case 364:
case 2592:
case 1503:
case 1726:
case 1190:
case 2365:
case 1745:
case 3124:
case 1176:
case 3667:
case 2899:
case 3293:
case 3255:
case 3865:
case 1008:
case 2858:
case 3399:
case 1982:
case 31:
case 3540:
case 409:
case 2268:
case 1929:
case 2135:
case 1177:
case 1123:
case 1601:
case 3891:
case 3680:
case 3666:
case 2408:
case 2970:
case 843:
case 3218:
case 546:
case 1587:
case 2442:
case 3791:
case 2758:
case 1042:
case 1873:
case 1827:
case 155:
case 6:
case 2531:
case 910:
case 834:
case 69:
case 14:
case 3765:
case 1412:
case 3490:
case 1560:
case 3476:
case 3952:
case 1625:
case 1845:
case 2024:
case 2617:
case 1646:
case 988:
case 2162:
case 3539:
case 3315:
case 182:
case 164:
case 1774:
case 2462:
case 2921:
case 347:
case 497:
case 1062:
case 1358:
case 1293:
case 836:
case 700:
case 3176:
case 1124:
case 533:
case 609:
case 940:
case 1399:
case 1540:
case 261:
case 1255:
case 1865:
case 926:
case 3294:
case 1666:
case 501:
case 813:
case 3601:
case 4038:
case 3123:
case 3177:
case 871:
case 1891:
case 516:
case 329:
case 1165:
case 3583:
case 2994:
case 1427:
case 1473:
case 1015:
case 2708:
case 586:
case 2689:
case 2073:
case 1191:
case 2622:
case 4020:
case 2842:
case 883:
case 2229:
case 3877:
case 3643:
case 915:
case 895:
case 2415:
case 708:
case 2323:
case 948:
case 1584:
case 2045:
case 112:
case 3541:
case 4093:
case 1824:
case 2578:
case 1644:
case 1812:
case 2026:
case 3890:
case 177:
case 3681:
case 1445:
case 3432:
case 3724:
case 3553:
case 1790:
case 1507:
case 3712:
case 4085:
case 439:
case 692:
case 2862:
case 1308:
case 3663:
case 3099:
case 1948:
case 528:
case 1126:
case 3058:
case 945:
case 1979:
case 1506:
case 1777:
case 1723:
case 2735:
case 3362:
case 1491:
case 2065:
case 3270:
case 3651:
case 37:
case 3595:
case 2091:
case 1127:
case 1800:
case 2050:
case 3676:
case 2046:
case 3690:
case 1336:
case 1425:
case 2109:
case 2903:
case 3910:
case 1446:
case 3322:
case 1450:
case 3389:
case 3875:
case 566:
case 4040:
case 696:
case 2814:
case 3843:
case 3623:
case 1166:
case 2375:
case 979:
case 1447:
case 2529:
case 555:
case 1751:
case 273:
case 211:
case 1206:
case 960:
case 1254:
case 2066:
case 51:
case 3851:
case 2736:
case 1147:
case 1466:
case 2363:
case 2898:
case 3359:
case 116:
case 3401:
case 3295:
case 83:
case 694:
case 3253:
case 2859:
case 582:
case 630:
case 144:
case 3863:
case 4086:
case 2269:
case 2117:
case 1775:
case 2939:
case 2133:
case 3597:
case 3700:
case 1467:
case 367:
case 2409:
case 2351:
case 133:
case 4007:
case 3013:
case 1286:
case 922:
case 374:
case 1260:
case 2817:
case 968:
case 1846:
case 1585:
case 512:
case 1334:
case 1372:
case 2953:
case 3969:
case 1571:
case 3037:
case 2833:
case 3481:
case 1645:
case 1825:
case 3239:
case 3518:
case 4054:
case 1089:
case 1673:
case 2995:
case 1164:
case 3780:
case 3317:
case 186:
case 125:
case 2615:
case 3036:
case 2498:
case 1256:
case 1880:
case 2064:
case 965:
case 1204:
case 1866:
case 303:
case 3801:
case 2734:
case 3143:
case 2189:
case 1691:
case 2122:
case 2983:
case 3594:
case 956:
case 1464:
case 2772:
case 1520:
case 3949:
case 1098:
case 1665:
case 1867:
case 331:
case 3203:
case 1059:
case 2809:
case 3978:
case 4084:
case 635:
case 3181:
case 3725:
case 184:
case 162:
case 128:
case 3175:
case 2459:
case 1085:
case 2999:
case 3752:
case 687:
case 2544:
case 1678:
case 2797:
case 3513:
case 2485:
case 857:
case 3537:
case 2193:
case 139:
case 904:
case 2224:
case 392:
case 3991:
case 2796:
case 3479:
case 1514:
case 1522:
case 2770:
case 3965:
case 67:
case 2120:
case 3235:
case 733:
case 1882:
case 500:
case 1242:
case 869:
case 353:
case 1397:
case 3927:
case 629:
case 3208:
case 2455:
case 3179:
case 911:
case 891:
case 521:
case 3094:
case 2606:
case 412:
case 1370:
case 1974:
case 2185:
case 3945:
case 3305:
case 1093:
case 2171:
case 1669:
case 477:
case 1262:
case 2546:
case 1517:
case 482:
case 3702:
case 3288:
case 2550:
case 2525:
case 2871:
case 1152:
case 1318:
case 458:
case 3371:
case 1215:
case 2438:
case 1631:
case 2794:
case 2547:
case 41:
case 1038:
case 784:
case 875:
case 981:
case 2029:
case 2265:
case 1923:
case 2566:
case 2935:
case 3258:
case 2291:
case 2405:
case 1182:
case 39:
case 3096:
case 2656:
case 455:
case 1394:
case 1990:
case 3912:
case 222:
case 3320:
case 1509:
case 3355:
case 1802:
case 2052:
case 1610:
case 254:
case 2106:
case 782:
case 764:
case 961:
case 676:
case 2247:
case 2328:
case 3411:
case 1831:
case 999:
case 226:
case 819:
case 3360:
case 3964:
case 2545:
case 1084:
case 3588:
case 2526:
case 539:
case 3648:
case 462:
case 484:
case 1963:
case 3130:
case 2703:
case 2078:
case 2739:
case 1975:
case 2184:
case 2069:
case 1007:
case 1728:
case 674:
case 1810:
case 1209:
case 755:
case 1178:
case 3599:
case 2407:
case 3900:
case 2565:
case 4089:
case 2804:
case 3111:
case 3558:
case 4014:
case 338:
case 1006:
case 3095:
case 2655:
case 210:
case 2406:
case 2392:
case 1943:
case 1303:
case 3668:
case 2454:
case 2795:
case 2156:
case 2638:
case 2104:
case 3811:
case 2140:
case 1087:
case 1682:
case 1289:
case 245:
case 742:
case 1901:
case 416:
case 1341:
case 3319:
case 2031:
case 280:
case 3384:
case 937:
case 2487:
case 401:
case 1110:
case 3192:
case 1730:
case 2157:
case 4009:
case 1060:
case 330:
case 3213:
case 1086:
case 2819:
case 394:
case 2311:
case 3039:
case 218:
case 433:
case 597:
case 2460:
case 2524:
case 3967:
case 3925:
case 2186:
case 2807:
case 1869:
case 78:
case 3003:
case 3778:
case 750:
case 2741:
case 4033:
case 3128:
case 414:
case 1410:
case 3492:
case 2457:
case 3354:
case 323:
case 2187:
case 2934:
case 2330:
case 4016:
case 2854:
case 1040:
case 712:
case 3508:
case 659:
case 2806:
case 2264:
case 1056:
case 1711:
case 1131:
case 3749:
case 3947:
case 3307:
case 3849:
case 3087:
case 3629:
case 3682:
case 2378:
case 509:
case 3222:
case 2883:
case 3431:
case 1811:
case 2577:
case 1319:
case 601:
case 2754:
case 269:
case 1384:
case 2706:
case 644:
case 1213:
case 1428:
case 194:
case 1192:
case 2909:
case 467:
case 3652:
case 2263:
case 3057:
case 2853:
case 1778:
case 2697:
case 3259:
case 1925:
case 2933:
case 2403:
case 3410:
case 1946:
case 2784:
case 308:
case 3562:
case 1950:
case 2139:
case 614:
case 1128:
case 3361:
case 3040:
case 270:
case 459:
case 1508:
case 2670:
case 4072:
case 2861:
case 620:
case 82:
case 1749:
case 2916:
case 4034:
case 2895:
case 3711:
case 3131:
case 66:
case 1272:
case 2998:
case 476:
case 1679:
case 1083:
case 2011:
case 932:
case 1386:
case 2704:
case 3449:
case 2756:
case 1964:
case 1360:
case 1234:
case 3951:
case 907:
case 1588:
case 2153:
case 1041:
case 2532:
case 1648:
case 2757:
case 592:
case 2959:
case 3792:
case 1387:
case 684:
case 3233:
case 2441:
case 868:
case 3602:
case 2803:
case 1892:
case 1430:
case 2453:
case 1356:
case 2760:
case 1340:
case 3469:
case 4037:
case 2030:
case 1731:
case 3054:
case 1111:
case 717:
case 1558:
case 2694:
case 3006:
case 1061:
case 856:
case 3149:
case 553:
case 2495:
case 321:
case 1668:
case 2914:
case 3303:
case 2310:
case 686:
case 2922:
case 2989:
case 1357:
case 865:
case 772:
case 2793:
case 1848:
case 1702:
case 3517:
case 594:
case 703:
case 1288:
case 530:
case 776:
case 2232:
case 3318:
case 397:
case 447:
case 2274:
case 852:
case 1021:
case 3533:
case 3152:
case 2720:
case 934:
case 810:
case 1572:
case 61:
case 990:
case 3429:
case 109:
case 3482:
case 731:
case 1879:
case 3038:
case 2170:
case 1534:
case 2755:
case 3923:
case 3977:
case 1868:
case 1393:
case 2942:
case 2302:
case 219:
case 826:
case 523:
case 774:
case 1:
case 4035:
case 64:
case 3129:
case 19:
case 3990:
case 1912:
case 936:
case 1320:
case 1924:
case 3452:
case 3748:
case 2121:
case 2603:
case 2329:
case 535:
case 1513:
case 1338:
case 642:
case 339:
case 2290:
case 192:
case 2276:
case 2641:
case 848:
case 815:
case 2543:
case 3514:
case 289:
case 3522:
case 1991:
case 983:
case 3829:
case 1235:
case 2277:
case 2194:
case 1536:
case 1965:
case 2705:
case 1611:
case 3397:
case 1782:
case 1973:
case 1927:
case 538:
case 2352:
case 2738:
case 2118:
case 153:
case 2551:
case 68:
case 85:
case 2896:
case 650:
case 1094:
case 1179:
case 2915:
case 3370:
case 998:
case 1926:
case 2563:
case 818:
case 3559:
case 3402:
case 3396:
case 1630:
case 612:
case 1148:
case 759:
case 677:
case 3669:
case 3262:
case 2897:
case 1305:
case 3932:
case 1300:
case 3582:
case 3416:
case 1956:
case 311:
case 2623:
case 1635:
case 3822:
case 470:
case 259:
case 3642:
case 3889:
case 1434:
case 3375:
case 727:
case 953:
case 2910:
case 3417:
case 1759:
case 3278:
case 2521:
case 2875:
case 198:
case 3046:
case 648:
case 2676:
case 1813:
case 2241:
case 3552:
case 267:
case 304:
case 2700:
case 812:
case 2597:
case 992:
case 1986:
case 3351:
case 1230:
case 618:
case 507:
case 2863:
case 2398:
case 3859:
case 2253:
case 3117:
case 88:
case 1714:
case 532:
case 2359:
case 1134:
case 680:
case 3363:
case 2570:
case 1722:
case 2295:
case 491:
case 3080:
case 0:
case 3736:
case 2261:
case 1001:
case 3422:
case 1350:
case 3231:
case 1954:
case 2443:
case 3414:
case 2780:
case 1346:
case 2036:
case 3961:
case 81:
case 99:
case 610:
case 3198:
case 1043:
case 2518:
case 3816:
case 2333:
case 1413:
case 1228:
case 2767:
case 1709:
case 1688:
case 882:
case 2037:
case 2632:
case 2674:
case 1548:
case 136:
case 719:
case 274:
case 3000:
case 2013:
case 3159:
case 2163:
case 3459:
case 2175:
case 2750:
case 1919:
case 3941:
case 1699:
case 2181:
case 1292:
case 2978:
case 3809:
case 478:
case 3210:
case 231:
case 1113:
case 2949:
case 2309:
case 3772:
case 685:
case 1716:
case 1658:
case 2747:
case 626:
case 2594:
case 2451:
case 143:
case 563:
case 1568:
case 3064:
case 3122:
case 3189:
case 2143:
case 3734:
case 2801:
case 1528:
case 2874:
case 1090:
case 272:
case 1076:
case 2315:
case 2952:
case 668:
case 2476:
case 2490:
case 3997:
case 775:
case 828:
case 217:
case 3531:
case 3616:
case 1279:
case 2765:
case 1905:
case 3996:
case 2218:
case 2477:
case 1435:
case 1326:
case 2791:
case 1634:
case 1408:
case 399:
case 449:
case 1268:
case 595:
case 2982:
case 2773:
case 2727:
case 1938:
case 825:
case 1899:
case 3202:
case 3788:
case 247:
case 2176:
case 2190:
case 1365:
case 935:
case 3921:
case 1391:
case 2890:
case 1074:
case 2876:
case 3578:
case 1613:
case 13:
case 2432:
case 2221:
case 2902:
case 1993:
case 427:
case 1762:
case 2088:
case 3377:
case 3045:
case 2675:
case 1032:
case 3282:
case 2877:
case 2823:
case 1835:
case 3622:
case 3415:
case 1955:
case 513:
case 3376:
case 1312:
case 4068:
case 3994:
case 3390:
case 1158:
case 923:
case 543:
case 2595:
case 27:
case 846:
case 489:
case 86:
case 2362:
case 590:
case 3735:
case 534:
case 3115:
case 3698:
case 3065:
case 2561:
case 62:
case 820:
case 3252:
case 1530:
case 1985:
case 769:
case 2712:
case 3569:
case 2724:
case 1499:
case 4048:
case 1188:
case 791:
case 33:
case 2445:
case 3199:
case 2812:
case 908:
case 3488:
case 1578:
case 3613:
case 3032:
case 867:
case 627:
case 3993:
case 2426:
case 2519:
case 1323:
case 1377:
case 3955:
case 1282:
case 479:
case 2968:
case 3835:
case 1842:
case 1027:
case 2191:
case 3636:
case 2015:
case 3511:
case 28:
case 748:
case 2473:
case 1549:
case 1376:
case 1994:
case 1091:
case 2127:
case 581:
case 137:
case 1918:
case 718:
case 2664:
case 1065:
case 42:
case 2205:
case 1735:
case 1115:
case 2777:
case 2979:
case 2506:
case 3985:
case 2948:
case 1252:
case 1569:
case 2145:
case 75:
case 3499:
case 2826:
case 710:
case 3076:
case 2650:
case 4052:
case 1024:
case 2625:
case 2424:
case 2560:
case 468:
case 1997:
case 2586:
case 3888:
case 876:
case 3905:
case 2388:
case 3672:
case 921:
case 3077:
case 2647:
case 1758:
case 2042:
case 3108:
case 752:
case 10:
case 1815:
case 2587:
case 3326:
case 1374:
case 3435:
case 1142:
case 3135:
case 456:
case 900:
case 3408:
case 332:
case 2666:
case 199:
case 4029:
case 2255:
case 161:
case 2504:
case 21:
case 2556:
case 2124:
case 874:
case 3365:
case 726:
case 2112:
case 2293:
case 258:
case 2358:
case 1788:
case 504:
case 793:
case 307:
case 2774:
case 754:
case 3834:
case 2701:
case 1198:
case 1615:
case 951:
case 3954:
case 1489:
case 3579:
case 286:
case 3906:
case 3346:
case 1414:
case 2164:
case 3325:
case 2014:
case 2287:
case 675:
case 371:
case 3043:
case 2847:
case 2645:
case 3075:
case 1953:
case 3688:
case 2372:
case 847:
case 2626:
case 3548:
case 1044:
case 1941:
case 756:
case 817:
case 3717:
case 3380:
case 2593:
case 997:
case 284:
case 765:
case 2144:
case 872:
case 3063:
case 3699:
case 2257:
case 678:
case 1809:
case 3292:
case 502:
case 2911:
case 3367:
case 181:
case 2464:
case 1772:
case 426:
case 2520:
case 3658:
case 3716:
case 485:
case 3136:
case 1189:
case 2691:
case 3051:
case 2240:
case 440:
case 2866:
case 2204:
case 2880:
case 1064:
case 2256:
case 1498:
case 4049:
case 2538:
case 3836:
case 26:
case 3300:
case 1529:
case 220:
case 1416:
case 3344:
case 1582:
case 3956:
case 2180:
case 3434:
case 1375:
case 3211:
case 2166:
case 50:
case 3635:
case 1814:
case 1822:
case 1047:
case 2033:
case 214:
case 887:
case 779:
case 3957:
case 1903:
case 2992:
case 1343:
case 3759:
case 1417:
case 1109:
case 2167:
case 2425:
case 398:
case 2017:
case 2284:
case 1046:
case 657:
case 2612:
case 4010:
case 2844:
case 2624:
case 418:
case 3230:
case 233:
case 2781:
case 1552:
case 3960:
case 2467:
case 1713:
case 104:
case 3986:
case 760:
case 1939:
case 2150:
case 1117:
case 1269:
case 2928:
case 1067:
case 1662:
case 72:
case 2009:
case 3714:
case 2480:
case 1898:
case 3987:
case 2743:
case 3134:
case 3608:
case 3722:
case 480:
case 2466:
case 45:
case 1116:
case 2505:
case 1066:
case 395:
case 561:
case 2254:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760634001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,];
var gg_b = "1760634001/";

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
