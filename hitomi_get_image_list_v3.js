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
case 3949:
case 1254:
case 2647:
case 4011:
case 3070:
case 3854:
case 2165:
case 447:
case 42:
case 2648:
case 3675:
case 2566:
case 2290:
case 1835:
case 1182:
case 1425:
case 3235:
case 1719:
case 1614:
case 1040:
case 1494:
case 1168:
case 1979:
case 2900:
case 2991:
case 1880:
case 2500:
case 3280:
case 1645:
case 1167:
case 2450:
case 2838:
case 2837:
case 72:
case 376:
case 747:
case 537:
case 426:
case 360:
case 3052:
case 2117:
case 2376:
case 3203:
case 3298:
case 294:
case 3132:
case 1285:
case 3640:
case 1931:
case 3045:
case 2824:
case 1531:
case 3457:
case 1304:
case 1723:
case 3458:
case 2895:
case 3014:
case 2288:
case 1670:
case 2609:
case 3746:
case 2323:
case 2769:
case 2664:
case 3907:
case 596:
case 3174:
case 2351:
case 1075:
case 2287:
case 3993:
case 3605:
case 3091:
case 440:
case 1310:
case 1:
case 514:
case 2496:
case 164:
case 2271:
case 1299:
case 3899:
case 455:
case 2461:
case 1564:
case 1509:
case 1964:
case 183:
case 755:
case 473:
case 2970:
case 2256:
case 3368:
case 685:
case 1121:
case 530:
case 367:
case 2841:
case 3922:
case 216:
case 3717:
case 2914:
case 561:
case 832:
case 3718:
case 2306:
case 3344:
case 2514:
case 2008:
case 525:
case 2093:
case 111:
case 1947:
case 2007:
case 3633:
case 1243:
case 304:
case 3083:
case 4094:
case 1374:
case 2952:
case 2360:
case 739:
case 1436:
case 3463:
case 3577:
case 1005:
case 2545:
case 1600:
case 898:
case 1760:
case 3977:
case 5:
case 3456:
case 1517:
case 243:
case 114:
case 2023:
case 1861:
case 604:
case 1183:
case 1518:
case 1004:
case 2859:
case 1069:
case 839:
case 26:
case 2544:
case 3314:
case 3748:
case 1441:
case 317:
case 3296:
case 2915:
case 732:
case 2116:
case 1621:
case 2377:
case 3345:
case 266:
case 1653:
case 3960:
case 130:
case 1778:
case 3471:
case 2740:
case 855:
case 97:
case 507:
case 3133:
case 3439:
case 1965:
case 3829:
case 1166:
case 895:
case 2582:
case 1340:
case 4038:
case 4037:
case 2836:
case 125:
case 511:
case 1191:
case 3764:
case 3992:
case 2967:
case 3604:
case 3709:
case 2811:
case 2968:
case 2322:
case 2567:
case 3592:
case 2179:
case 976:
case 960:
case 873:
case 3370:
case 1722:
case 1305:
case 3610:
case 1114:
case 2147:
case 2665:
case 3576:
case 251:
case 1850:
case 2148:
case 3175:
case 3976:
case 3228:
case 2060:
case 3250:
case 3716:
case 3951:
case 2393:
case 631:
case 904:
case 3923:
case 137:
case 1668:
case 3884:
case 2435:
case 1946:
case 1667:
case 2825:
case 3044:
case 3490:
case 1707:
case 2258:
case 2220:
case 1495:
case 2733:
case 3067:
case 82:
case 660:
case 847:
case 3919:
case 676:
case 2617:
case 1333:
case 3519:
case 3272:
case 3366:
case 1781:
case 67:
case 3855:
case 2164:
case 2498:
case 2403:
case 3779:
case 3674:
case 196:
case 1424:
case 3391:
case 1010:
case 3234:
case 2921:
case 1242:
case 593:
case 1195:
case 1996:
case 2815:
case 4083:
case 404:
case 2634:
case 3860:
case 238:
case 3913:
case 909:
case 3187:
case 3188:
case 1339:
case 2343:
case 2409:
case 1818:
case 292:
case 2464:
case 3218:
case 1561:
case 2672:
case 2197:
case 3773:
case 1817:
case 658:
case 252:
case 788:
case 3025:
case 3657:
case 2844:
case 1124:
case 575:
case 2232:
case 704:
case 3620:
case 3658:
case 2867:
case 3892:
case 4066:
case 2180:
case 423:
case 1292:
case 1057:
case 1414:
case 3341:
case 2511:
case 2868:
case 1356:
case 2447:
case 467:
case 1138:
case 3475:
case 2448:
case 3389:
case 2399:
case 2650:
case 2628:
case 1452:
case 3929:
case 885:
case 767:
case 2055:
case 1371:
case 340:
case 1902:
case 1694:
case 1799:
case 2042:
case 395:
case 3190:
case 1502:
case 2882:
case 2936:
case 1445:
case 2135:
case 3851:
case 1387:
case 958:
case 3823:
case 1223:
case 302:
case 2525:
case 3395:
case 1086:
case 2204:
case 2925:
case 3246:
case 2126:
case 731:
case 2269:
case 1611:
case 834:
case 3703:
case 3324:
case 3798:
case 3663:
case 2173:
case 2479:
case 3797:
case 2762:
case 4052:
case 1927:
case 932:
case 4045:
case 1528:
case 1550:
case 3876:
case 119:
case 1928:
case 2013:
case 1785:
case 2029:
case 3955:
case 3338:
case 3555:
case 1483:
case 205:
case 326:
case 77:
case 2853:
case 186:
case 3036:
case 2312:
case 476:
case 2431:
case 3942:
case 2696:
case 18:
case 347:
case 512:
case 1754:
case 1659:
case 3011:
case 4070:
case 1572:
case 2701:
case 2354:
case 2790:
case 3735:
case 1879:
case 2342:
case 3512:
case 3279:
case 973:
case 860:
case 1111:
case 2626:
case 3912:
case 2099:
case 2537:
case 3734:
case 3639:
case 2937:
case 1071:
case 2355:
case 3954:
case 2866:
case 2757:
case 940:
case 1056:
case 2758:
case 169:
case 2720:
case 4068:
case 3089:
case 3772:
case 995:
case 1357:
case 1935:
case 519:
case 3404:
case 1136:
case 955:
case 2673:
case 2595:
case 3530:
case 2196:
case 227:
case 734:
case 24:
case 2995:
case 544:
case 3216:
case 4044:
case 3656:
case 3807:
case 1784:
case 586:
case 208:
case 1503:
case 4015:
case 1598:
case 2883:
case 1597:
case 3671:
case 1903:
case 284:
case 1039:
case 112:
case 1831:
case 562:
case 3186:
case 3750:
case 3394:
case 710:
case 2524:
case 3727:
case 1453:
case 3687:
case 785:
case 867:
case 2989:
case 193:
case 578:
case 3264:
case 2870:
case 3688:
case 2589:
case 3822:
case 695:
case 2541:
case 3311:
case 2134:
case 823:
case 1363:
case 1624:
case 1729:
case 3336:
case 2240:
case 3120:
case 673:
case 2698:
case 2763:
case 2172:
case 4053:
case 3999:
case 3038:
case 4021:
case 2697:
case 2465:
case 1637:
case 902:
case 398:
case 3796:
case 2313:
case 3543:
case 1278:
case 1125:
case 1482:
case 3410:
case 3024:
case 1526:
case 3877:
case 1277:
case 2814:
case 1973:
case 3761:
case 2030:
case 3690:
case 1848:
case 2786:
case 2128:
case 1088:
case 717:
case 1847:
case 1929:
case 825:
case 1265:
case 653:
case 693:
case 4:
case 195:
case 2963:
case 1190:
case 2034:
case 3445:
case 3799:
case 2563:
case 2477:
case 532:
case 1101:
case 742:
case 3414:
case 558:
case 2268:
case 1341:
case 3058:
case 3020:
case 2789:
case 2684:
case 849:
case 764:
case 173:
case 1892:
case 598:
case 2112:
case 442:
case 2267:
case 941:
case 1475:
case 3138:
case 675:
case 2072:
case 3137:
case 7:
case 1217:
case 3817:
case 139:
case 3470:
case 912:
case 411:
case 2373:
case 2832:
case 279:
case 1620:
case 2986:
case 1658:
case 1025:
case 3206:
case 2586:
case 711:
case 3596:
case 2326:
case 830:
case 3743:
case 3195:
case 2215:
case 428:
case 1188:
case 2027:
case 3339:
case 1513:
case 1913:
case 2028:
case 3659:
case 3754:
case 2558:
case 2520:
case 2957:
case 38:
case 2920:
case 2958:
case 3301:
case 147:
case 85:
case 362:
case 2407:
case 1735:
case 3219:
case 3572:
case 1819:
case 856:
case 3483:
case 3189:
case 4040:
case 993:
case 344:
case 669:
case 1955:
case 1337:
case 1156:
case 896:
case 3141:
case 2002:
case 3063:
case 126:
case 386:
case 1036:
case 2096:
case 3400:
case 1324:
case 400:
case 265:
case 3491:
case 3362:
case 2397:
case 3527:
case 3928:
case 319:
case 3550:
case 2398:
case 1823:
case 3466:
case 3388:
case 1139:
case 102:
case 218:
case 612:
case 3251:
case 2061:
case 1584:
case 2481:
case 1059:
case 4075:
case 3086:
case 224:
case 3998:
case 3503:
case 3997:
case 2962:
case 2328:
case 2350:
case 2794:
case 2805:
case 3159:
case 1585:
case 800:
case 1728:
case 1750:
case 2073:
case 978:
case 3816:
case 1930:
case 287:
case 1325:
case 2588:
case 1893:
case 3784:
case 526:
case 3689:
case 3293:
case 2419:
case 1808:
case 2113:
case 619:
case 2725:
case 1656:
case 1807:
case 3207:
case 2451:
case 369:
case 644:
case 1089:
case 45:
case 1954:
case 2129:
case 203:
case 3056:
case 1041:
case 3358:
case 2590:
case 686:
case 3320:
case 3535:
case 2901:
case 1772:
case 1881:
case 215:
case 1163:
case 3357:
case 3136:
case 2334:
case 3980:
case 1512:
case 502:
case 1279:
case 1639:
case 3071:
case 341:
case 75:
case 2476:
case 3742:
case 268:
case 456:
case 662:
case 3573:
case 2492:
case 3467:
case 1690:
case 678:
case 811:
case 1601:
case 1095:
case 730:
case 3468:
case 2214:
case 3386:
case 3088:
case 1247:
case 3847:
case 4004:
case 2759:
case 2361:
case 919:
case 2252:
case 573:
case 1543:
case 2003:
case 158:
case 3637:
case 280:
case 2939:
case 1943:
case 2396:
case 714:
case 3526:
case 3713:
case 828:
case 3278:
case 430:
case 1024:
case 2685:
case 2302:
case 98:
case 1158:
case 3415:
case 2840:
case 3624:
case 1336:
case 2460:
case 1474:
case 962:
case 425:
case 2971:
case 3809:
case 2711:
case 1264:
case 944:
case 2956:
case 1688:
case 2270:
case 1209:
case 3090:
case 2406:
case 986:
case 2035:
case 3695:
case 3222:
case 1432:
case 2295:
case 2622:
case 297:
case 1458:
case 3230:
case 1457:
case 3304:
case 719:
case 1174:
case 1908:
case 3075:
case 1507:
case 1993:
case 2160:
case 1508:
case 930:
case 1593:
case 1907:
case 1203:
case 3898:
case 3803:
case 1052:
case 3897:
case 3531:
case 637:
case 2905:
case 2224:
case 1132:
case 419:
case 271:
case 3931:
case 3285:
case 3776:
case 69:
case 1353:
case 3880:
case 3212:
case 1280:
case 3645:
case 3579:
case 3167:
case 510:
case 1321:
case 3040:
case 65:
case 3494:
case 3168:
case 3979:
case 841:
case 2753:
case 4063:
case 2237:
case 78:
case 1675:
case 961:
case 786:
case 17:
case 2933:
case 3254:
case 1854:
case 1070:
case 2009:
case 3614:
case 744:
case 696:
case 534:
case 2484:
case 925:
case 1235:
case 656:
case 1981:
case 1083:
case 250:
case 2715:
case 3374:
case 478:
case 2151:
case 188:
case 2839:
case 2123:
case 2429:
case 1315:
case 1578:
case 937:
case 3760:
case 3436:
case 1104:
case 1226:
case 1978:
case 1169:
case 3691:
case 3005:
case 1577:
case 1718:
case 3411:
case 1717:
case 2016:
case 3332:
case 3873:
case 3666:
case 3947:
case 3548:
case 3706:
case 2744:
case 2649:
case 1633:
case 311:
case 3964:
case 2607:
case 4057:
case 517:
case 123:
case 3033:
case 661:
case 3564:
case 2608:
case 3509:
case 2289:
case 3153:
case 1522:
case 1367:
case 893:
case 501:
case 956:
case 1486:
case 853:
case 625:
case 2940:
case 1000:
case 99:
case 3310:
case 1605:
case 1091:
case 1765:
case 95:
case 2413:
case 3683:
case 1899:
case 364:
case 649:
case 453:
case 3100:
case 1592:
case 1764:
case 2211:
case 1709:
case 6:
case 2651:
case 4001:
case 2309:
case 1370:
case 4090:
case 3229:
case 2443:
case 1439:
case 1133:
case 1829:
case 2676:
case 361:
case 248:
case 2910:
case 206:
case 2863:
case 185:
case 2236:
case 3340:
case 3802:
case 607:
case 117:
case 2752:
case 523:
case 3896:
case 2745:
case 3778:
case 611:
case 2108:
case 1813:
case 1352:
case 2193:
case 1960:
case 3213:
case 3861:
case 3917:
case 3489:
case 2619:
case 3375:
case 2348:
case 900:
case 2347:
case 3517:
case 3918:
case 222:
case 4087:
case 2886:
case 1506:
case 2532:
case 2046:
case 2259:
case 3069:
case 2660:
case 1855:
case 886:
case 3255:
case 1842:
case 2379:
case 3615:
case 1300:
case 441:
case 396:
case 1234:
case 4071:
case 3834:
case 4056:
case 3749:
case 3644:
case 2857:
case 862:
case 531:
case 741:
case 35:
case 1067:
case 2430:
case 1140:
case 39:
case 2820:
case 469:
case 1519:
case 1272:
case 3872:
case 1488:
case 3781:
case 1487:
case 110:
case 1923:
case 3152:
case 2017:
case 1951:
case 600:
case 1523:
case 2178:
case 2692:
case 2904:
case 1044:
case 2969:
case 1490:
case 2316:
case 2504:
case 3284:
case 3546:
case 337:
case 560:
case 2569:
case 819:
case 2783:
case 2331:
case 2412:
case 57:
case 3828:
case 3850:
case 3074:
case 1383:
case 1175:
case 1731:
case 911:
case 1976:
case 3437:
case 1227:
case 3827:
case 1576:
case 2353:
case 4029:
case 1192:
case 2280:
case 1678:
case 3500:
case 3591:
case 2321:
case 3900:
case 1753:
case 3837:
case 1237:
case 3427:
case 260:
case 1238:
case 3450:
case 3428:
case 3319:
case 2549:
case 1533:
case 3566:
case 705:
case 27:
case 1933:
case 3165:
case 1009:
case 2070:
case 2854:
case 1801:
case 1484:
case 13:
case 2581:
case 2110:
case 3290:
case 2981:
case 197:
case 2830:
case 1622:
case 2014:
case 2420:
case 970:
case 863:
case 2457:
case 1887:
case 2174:
case 1160:
case 827:
case 3287:
case 1048:
case 3351:
case 3704:
case 3609:
case 3288:
case 691:
case 2907:
case 3769:
case 2593:
case 1455:
case 3583:
case 943:
case 3262:
case 2297:
case 3078:
case 3434:
case 1106:
case 96:
case 2132:
case 4013:
case 1442:
case 171:
case 1505:
case 3049:
case 223:
case 1607:
case 3256:
case 3970:
case 1767:
case 1693:
case 3889:
case 3570:
case 2367:
case 2522:
case 2368:
case 3841:
case 267:
case 1079:
case 31:
case 522:
case 3496:
case 4055:
case 1119:
case 1413:
case 2899:
case 1871:
case 1782:
case 3271:
case 3952:
case 977:
case 643:
case 3360:
case 682:
case 1123:
case 50:
case 204:
case 3239:
case 792:
case 2315:
case 2578:
case 3402:
case 2226:
case 3945:
case 752:
case 3146:
case 2169:
case 2577:
case 1681:
case 3514:
case 2344:
case 3306:
case 2718:
case 738:
case 1016:
case 2717:
case 2273:
case 951:
case 1649:
case 2633:
case 3007:
case 1318:
case 506:
case 3008:
case 1317:
case 1975:
case 4084:
case 3093:
case 2345:
case 370:
case 3116:
case 759:
case 1752:
case 217:
case 838:
case 1745:
case 2471:
case 1574:
case 2352:
case 1193:
case 4030:
case 3051:
case 2261:
case 1619:
case 954:
case 2456:
case 994:
case 36:
case 1932:
case 499:
case 720:
case 3286:
case 2506:
case 3859:
case 459:
case 2747:
case 1532:
case 1046:
case 3944:
case 1259:
case 590:
case 3968:
case 10:
case 3179:
case 3567:
case 2592:
case 3473:
case 1211:
case 61:
case 2669:
case 2764:
case 3811:
case 3967:
case 2992:
case 3019:
case 1364:
case 2370:
case 4012:
case 1443:
case 2829:
case 3740:
case 148:
case 2053:
case 1910:
case 1236:
case 1181:
case 1510:
case 616:
case 654:
case 3307:
case 2923:
case 1454:
case 377:
case 3308:
case 694:
case 1017:
case 2523:
case 44:
case 427:
case 2951:
case 1178:
case 2044:
case 3006:
case 2015:
case 1783:
case 881:
case 1331:
case 3480:
case 2610:
case 174:
case 484:
case 989:
case 2250:
case 3060:
case 2228:
case 2731:
case 3665:
case 727:
case 234:
case 2576:
case 53:
case 557:
case 3497:
case 1791:
case 597:
case 2855:
case 1065:
case 3109:
case 1485:
case 916:
case 2234:
case 2391:
case 2082:
case 3953:
case 3733:
case 1606:
case 2067:
case 3381:
case 1766:
case 3220:
case 2068:
case 3258:
case 91:
case 1820:
case 1858:
case 2272:
case 3618:
case 2519:
case 3349:
case 2366:
case 571:
case 2919:
case 2773:
case 2217:
case 3197:
case 2162:
case 908:
case 239:
case 86:
case 984:
case 3409:
case 2218:
case 3464:
case 4093:
case 1422:
case 1373:
case 3232:
case 3084:
case 2620:
case 3559:
case 489:
case 1185:
case 4007:
case 2806:
case 3959:
case 946:
case 1244:
case 1586:
case 1326:
case 3634:
case 789:
case 1642:
case 927:
case 2440:
case 699:
case 2726:
case 866:
case 2188:
case 963:
case 338:
case 2860:
case 3274:
case 1028:
case 2187:
case 2929:
case 240:
case 2265:
case 3055:
case 3627:
case 3628:
case 3650:
case 2529:
case 3399:
case 3210:
case 1282:
case 295:
case 1478:
case 1810:
case 1477:
case 3042:
case 1268:
case 2341:
case 3868:
case 273:
case 3867:
case 2892:
case 1112:
case 3756:
case 2475:
case 3448:
case 2389:
case 4081:
case 3447:
case 891:
case 503:
case 2797:
case 3173:
case 1096:
case 3602:
case 3385:
case 851:
case 494:
case 2663:
case 2798:
case 64:
case 2324:
case 3594:
case 1397:
case 515:
case 381:
case 3013:
case 999:
case 121:
case 4078:
case 959:
case 2139:
case 608:
case 1449:
case 1795:
case 118:
case 1869:
case 3126:
case 1481:
case 3788:
case 2584:
case 568:
case 3269:
case 2059:
case 3525:
case 794:
case 877:
case 1520:
case 1558:
case 935:
case 1335:
case 1957:
case 1920:
case 22:
case 247:
case 524:
case 3354:
case 2735:
case 3661:
case 1199:
case 1408:
case 2338:
case 313:
case 3029:
case 2780:
case 2156:
case 587:
case 2955:
case 2337:
case 1738:
case 3431:
case 2942:
case 3821:
case 2405:
case 305:
case 1253:
case 1380:
case 1737:
case 1451:
case 613:
case 103:
case 3866:
case 2954:
case 1372:
case 1129:
case 3757:
case 1833:
case 3673:
case 1990:
case 2772:
case 3446:
case 2404:
case 1501:
case 518:
case 1291:
case 3342:
case 1643:
case 2734:
case 3937:
case 3938:
case 3537:
case 168:
case 3043:
case 308:
case 3161:
case 3883:
case 1350:
case 1026:
case 1805:
case 451:
case 2585:
case 491:
case 4060:
case 2231:
case 3524:
case 2985:
case 2394:
case 2750:
case 2728:
case 2216:
case 751:
case 3196:
case 1073:
case 187:
case 2930:
case 791:
case 2325:
case 2530:
case 2893:
case 1588:
case 1987:
case 1419:
case 1113:
case 209:
case 2807:
case 363:
case 1587:
case 681:
case 2158:
case 2120:
case 1302:
case 3240:
case 1685:
case 2157:
case 3012:
case 2336:
case 1460:
case 2474:
case 2662:
case 3697:
case 1571:
case 3172:
case 3329:
case 2599:
case 1971:
case 579:
case 1736:
case 3870:
case 2264:
case 1155:
case 2209:
case 2688:
case 1956:
case 2687:
case 3989:
case 3417:
case 3541:
case 1035:
case 1630:
case 2432:
case 4019:
case 1142:
case 482:
case 2359:
case 2690:
case 172:
case 3814:
case 2601:
case 3030:
case 2247:
case 638:
case 1654:
case 1759:
case 232:
case 1875:
case 3786:
case 3128:
case 3150:
case 770:
case 1361:
case 2796:
case 298:
case 692:
case 1097:
case 1252:
case 3852:
case 3313:
case 652:
case 1003:
case 258:
case 3465:
case 466:
case 1939:
case 180:
case 76:
case 4076:
case 533:
case 782:
case 3085:
case 3845:
case 2410:
case 1867:
case 2625:
case 2292:
case 1180:
case 2020:
case 1511:
case 520:
case 3072:
case 333:
case 2137:
case 2138:
case 3741:
case 1448:
case 968:
case 1628:
case 1650:
case 1399:
case 4079:
case 903:
case 2865:
case 1055:
case 2371:
case 1627:
case 806:
case 3477:
case 3563:
case 2799:
case 1042:
case 3282:
case 915:
case 1210:
case 2445:
case 599:
case 3810:
case 2996:
case 278:
case 2195:
case 1815:
case 729:
case 3326:
case 1739:
case 3874:
case 3028:
case 3655:
case 2339:
case 1343:
case 1103:
case 1672:
case 2561:
case 924:
case 1464:
case 192:
case 1197:
case 152:
case 2817:
case 4016:
case 1844:
case 750:
case 2124:
case 1959:
case 3586:
case 1084:
case 3986:
case 3185:
case 1029:
case 527:
case 54:
case 436:
case 3613:
case 105:
case 3253:
case 2063:
case 2934:
case 1312:
case 286:
case 3737:
case 3002:
case 2534:
case 3738:
case 1431:
case 563:
case 1696:
case 1821:
case 2301:
case 3520:
case 2390:
case 3558:
case 4009:
case 2659:
case 4064:
case 3199:
case 1661:
case 3493:
case 2572:
case 43:
case 2219:
case 736:
case 546:
case 262:
case 3407:
case 1354:
case 668:
case 318:
case 2730:
case 2388:
case 980:
case 2223:
case 3449:
case 3143:
case 1525:
case 2086:
case 1204:
case 2846:
case 3804:
case 4047:
case 2611:
case 687:
case 2636:
case 2491:
case 972:
case 1762:
case 1173:
case 3096:
case 1479:
case 1385:
case 3303:
case 2927:
case 3398:
case 3397:
case 181:
case 1013:
case 321:
case 757:
case 219:
case 2928:
case 2276:
case 2950:
case 1595:
case 4018:
case 665:
case 1995:
case 127:
case 3073:
case 4017:
case 2816:
case 621:
case 3988:
case 3725:
case 163:
case 3587:
case 2207:
case 2784:
case 774:
case 3419:
case 897:
case 2293:
case 2997:
case 2503:
case 108:
case 184:
case 2903:
case 474:
case 3562:
case 2597:
case 2998:
case 324:
case 2039:
case 1524:
case 979:
case 2421:
case 3805:
case 3026:
case 1205:
case 146:
case 2159:
case 2879:
case 1342:
case 3200:
case 4065:
case 3334:
case 1891:
case 2980:
case 1099:
case 3476:
case 1938:
case 241:
case 2742:
case 3643:
case 836:
case 2071:
case 1355:
case 303:
case 3129:
case 3372:
case 3266:
case 3833:
case 1720:
case 269:
case 3990:
case 1446:
case 2136:
case 2357:
case 1102:
case 2320:
case 3901:
case 1673:
case 845:
case 3003:
case 1465:
case 120:
case 380:
case 3098:
case 918:
case 2638:
case 1852:
case 1313:
case 3539:
case 679:
case 1680:
case 3245:
case 3612:
case 1845:
case 890:
case 2482:
case 3396:
case 722:
case 3184:
case 2713:
case 829:
case 2386:
case 3214:
case 1030:
case 2194:
case 2573:
case 965:
case 372:
case 3875:
case 921:
case 199:
case 1150:
case 2087:
case 1127:
case 40:
case 3556:
case 3711:
case 1418:
case 2864:
case 3270:
case 1941:
case 2001:
case 1134:
case 538:
case 748:
case 2090:
case 3035:
case 2729:
case 135:
case 552:
case 1012:
case 448:
case 592:
case 1172:
case 70:
case 1698:
case 1603:
case 1697:
case 1117:
case 2897:
case 3862:
case 154:
case 2898:
case 465:
case 1583:
case 3455:
case 1118:
case 922:
case 2803:
case 421:
case 3505:
case 3224:
case 3905:
case 3106:
case 1434:
case 2516:
case 2369:
case 2723:
case 397:
case 2115:
case 3622:
case 3295:
case 2916:
case 2230:
case 418:
case 1704:
case 3047:
case 2670:
case 1288:
case 1664:
case 887:
case 1287:
case 3009:
case 1966:
case 1566:
case 2182:
case 906:
case 1290:
case 3890:
case 803:
case 551:
case 1201:
case 1022:
case 868:
case 2168:
case 2494:
case 2040:
case 2979:
case 2880:
case 577:
case 2579:
case 2645:
case 1500:
case 2212:
case 3238:
case 1428:
case 4002:
case 2652:
case 1837:
case 3753:
case 3237:
case 3016:
case 2873:
case 1914:
case 3681:
case 1306:
case 1514:
case 974:
case 3317:
case 1008:
case 211:
case 2948:
case 329:
case 3176:
case 2947:
case 3649:
case 3744:
case 3318:
case 3575:
case 1007:
case 390:
case 779:
case 3123:
case 2243:
case 1239:
case 622:
case 3715:
case 228:
case 1360:
case 1945:
case 880:
case 1146:
case 345:
case 2826:
case 2691:
case 1774:
case 2600:
case 1545:
case 4050:
case 4028:
case 2760:
case 1402:
case 2310:
case 3940:
case 2:
case 582:
case 11:
case 56:
case 3871:
case 1271:
case 4034:
case 2299:
case 3119:
case 570:
case 1889:
case 3693:
case 3768:
case 566:
case 2509:
case 1570:
case 3608:
case 1049:
case 648:
case 3607:
case 1970:
case 283:
case 606:
case 1616:
case 2153:
case 116:
case 433:
case 1081:
case 4072:
case 1740:
case 348:
case 4080:
case 3149:
case 3443:
case 2229:
case 2340:
case 1582:
case 3510:
case 2802:
case 93:
case 225:
case 306:
case 1263:
case 589:
case 1982:
case 1836:
case 3181:
case 1568:
case 3211:
case 936:
case 3770:
case 1967:
case 1811:
case 1473:
case 1179:
case 3623:
case 3309:
case 249:
case 1019:
case 2722:
case 472:
case 3347:
case 182:
case 51:
case 2918:
case 650:
case 2917:
case 879:
case 2861:
case 2375:
case 1051:
case 3714:
case 3046:
case 2004:
case 3259:
case 3932:
case 2441:
case 1544:
case 3752:
case 997:
case 1915:
case 2621:
case 1377:
case 1378:
case 170:
case 1515:
case 957:
case 2653:
case 4003:
case 516:
case 3974:
case 3108:
case 3499:
case 3107:
case 3606:
case 1257:
case 1092:
case 25:
case 3766:
case 554:
case 1617:
case 2333:
case 415:
case 1498:
case 1403:
case 2255:
case 3065:
case 3660:
case 3700:
case 1521:
case 2010:
case 256:
case 1553:
case 3122:
case 703:
case 424:
case 3412:
case 2682:
case 374:
case 697:
case 1894:
case 3783:
case 2114:
case 657:
case 3294:
case 865:
case 2827:
case 2828:
case 191:
case 1148:
case 3017:
case 177:
case 2152:
case 1393:
case 3018:
case 1307:
case 2708:
case 237:
case 2284:
case 3504:
case 3316:
case 2793:
case 2668:
case 818:
case 3904:
case 2667:
case 3178:
case 1435:
case 3969:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750050001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,];
var gg_b = "1750050001/";

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
