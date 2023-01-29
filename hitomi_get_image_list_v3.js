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
case 922:
case 1836:
case 1147:
case 1945:
case 1598:
case 533:
case 3474:
case 1863:
case 3263:
case 2600:
case 1055:
case 2670:
case 1378:
case 671:
case 2948:
case 605:
case 3639:
case 3350:
case 4021:
case 2762:
case 1278:
case 2297:
case 1685:
case 833:
case 2657:
case 1228:
case 2457:
case 2080:
case 2644:
case 1745:
case 427:
case 1266:
case 710:
case 2981:
case 3015:
case 3039:
case 992:
case 2697:
case 1144:
case 3694:
case 3053:
case 3196:
case 1022:
case 610:
case 236:
case 1534:
case 141:
case 3591:
case 3291:
case 727:
case 1269:
case 1318:
case 3486:
case 1194:
case 2895:
case 2037:
case 1348:
case 3119:
case 2260:
case 3903:
case 275:
case 2427:
case 4002:
case 3034:
case 1847:
case 494:
case 380:
case 2236:
case 194:
case 57:
case 3299:
case 3620:
case 1698:
case 3231:
case 2021:
case 1247:
case 3910:
case 1110:
case 868:
case 2312:
case 112:
case 570:
case 2231:
case 993:
case 1887:
case 979:
case 3709:
case 2003:
case 2135:
case 1743:
case 1930:
case 3548:
case 1980:
case 3932:
case 1495:
case 3391:
case 2278:
case 3173:
case 467:
case 1213:
case 3153:
case 3199:
case 1912:
case 3227:
case 3577:
case 3375:
case 3179:
case 332:
case 3979:
case 773:
case 485:
case 1779:
case 2867:
case 42:
case 3317:
case 24:
case 1655:
case 667:
case 2727:
case 2630:
case 2129:
case 256:
case 1299:
case 65:
case 1818:
case 3758:
case 1105:
case 287:
case 538:
case 2354:
case 3748:
case 3116:
case 1610:
case 2889:
case 2052:
case 163:
case 1170:
case 3182:
case 415:
case 2952:
case 1271:
case 3326:
case 71:
case 863:
case 2170:
case 939:
case 2579:
case 2275:
case 3909:
case 13:
case 3045:
case 844:
case 491:
case 2078:
case 67:
case 393:
case 3251:
case 3040:
case 645:
case 133:
case 3331:
case 3218:
case 1150:
case 3819:
case 3978:
case 1027:
case 3322:
case 2024:
case 3482:
case 3841:
case 3260:
case 1212:
case 620:
case 276:
case 2934:
case 2002:
case 2456:
case 2237:
case 2331:
case 496:
case 2612:
case 2533:
case 800:
case 1:
case 3487:
case 2163:
case 1807:
case 1291:
case 231:
case 2411:
case 923:
case 3926:
case 3070:
case 937:
case 1749:
case 2348:
case 205:
case 579:
case 452:
case 2461:
case 3647:
case 2494:
case 921:
case 12:
case 961:
case 2846:
case 2458:
case 223:
case 2986:
case 1790:
case 1996:
case 600:
case 567:
case 45:
case 650:
case 852:
case 2671:
case 3055:
case 828:
case 786:
case 1686:
case 3456:
case 127:
case 3183:
case 360:
case 2090:
case 2325:
case 2055:
case 1539:
case 1897:
case 2410:
case 4091:
case 2683:
case 1746:
case 2713:
case 146:
case 453:
case 1270:
case 3801:
case 1717:
case 3246:
case 4017:
case 3421:
case 1377:
case 1442:
case 2044:
case 3489:
case 1551:
case 683:
case 3550:
case 2870:
case 604:
case 1053:
case 563:
case 1909:
case 2120:
case 1637:
case 3657:
case 952:
case 1195:
case 1515:
case 2701:
case 2756:
case 3658:
case 2014:
case 975:
case 1151:
case 565:
case 1294:
case 2505:
case 3484:
case 3408:
case 343:
case 4086:
case 3105:
case 3757:
case 4038:
case 977:
case 3804:
case 2243:
case 2381:
case 3491:
case 3816:
case 130:
case 3745:
case 4059:
case 1504:
case 1964:
case 3292:
case 3768:
case 1344:
case 3416:
case 3422:
case 2917:
case 362:
case 2878:
case 1943:
case 3245:
case 3648:
case 69:
case 2438:
case 1191:
case 2779:
case 2516:
case 3847:
case 102:
case 1855:
case 8:
case 2806:
case 556:
case 1487:
case 2471:
case 4045:
case 2315:
case 886:
case 2919:
case 1030:
case 51:
case 812:
case 3323:
case 2497:
case 1822:
case 1657:
case 1904:
case 3503:
case 2405:
case 3118:
case 1029:
case 4037:
case 3689:
case 767:
case 82:
case 1328:
case 2449:
case 1338:
case 319:
case 2767:
case 2238:
case 2587:
case 2047:
case 1052:
case 793:
case 3866:
case 1497:
case 1293:
case 554:
case 1811:
case 2822:
case 2739:
case 2061:
case 3679:
case 672:
case 748:
case 791:
case 3772:
case 3122:
case 2695:
case 2008:
case 2476:
case 1143:
case 630:
case 2830:
case 1555:
case 3676:
case 2764:
case 1712:
case 3884:
case 1577:
case 76:
case 1900:
case 722:
case 3229:
case 3332:
case 1004:
case 2969:
case 541:
case 188:
case 1227:
case 1848:
case 240:
case 1948:
case 2814:
case 280:
case 1882:
case 2826:
case 3562:
case 2214:
case 3720:
case 2841:
case 506:
case 3610:
case 3037:
case 3432:
case 2638:
case 3692:
case 466:
case 1842:
case 3793:
case 261:
case 2005:
case 1457:
case 3459:
case 1845:
case 725:
case 2534:
case 1550:
case 586:
case 880:
case 1383:
case 3668:
case 3351:
case 790:
case 2123:
case 2116:
case 2489:
case 872:
case 2865:
case 2926:
case 3950:
case 2232:
case 2974:
case 827:
case 1415:
case 2605:
case 3669:
case 582:
case 2698:
case 3381:
case 1490:
case 1468:
case 3795:
case 2942:
case 3370:
case 20:
case 2502:
case 2409:
case 1955:
case 1518:
case 2483:
case 3974:
case 3409:
case 1645:
case 1017:
case 103:
case 405:
case 3453:
case 584:
case 3334:
case 697:
case 1764:
case 3457:
case 2623:
case 4079:
case 2176:
case 2783:
case 3545:
case 1407:
case 2628:
case 913:
case 2133:
case 3222:
case 3813:
case 2803:
case 1429:
case 3955:
case 3189:
case 549:
case 3810:
case 2877:
case 1233:
case 543:
case 2439:
case 1249:
case 1869:
case 963:
case 1653:
case 851:
case 2704:
case 3525:
case 2831:
case 488:
case 1668:
case 384:
case 1051:
case 2446:
case 3886:
case 2363:
case 657:
case 552:
case 1125:
case 4058:
case 457:
case 3650:
case 3295:
case 3844:
case 1288:
case 2556:
case 1117:
case 2893:
case 855:
case 3702:
case 1817:
case 1043:
case 217:
case 3649:
case 2423:
case 7:
case 197:
case 915:
case 1905:
case 3514:
case 3695:
case 2030:
case 996:
case 997:
case 942:
case 1903:
case 3485:
case 1809:
case 1329:
case 2573:
case 334:
case 1049:
case 1767:
case 1667:
case 523:
case 553:
case 1244:
case 2892:
case 281:
case 1640:
case 2935:
case 3933:
case 525:
case 1313:
case 4061:
case 35:
case 626:
case 702:
case 3815:
case 505:
case 3561:
case 3358:
case 577:
case 2305:
case 593:
case 947:
case 2109:
case 2357:
case 3712:
case 108:
case 1104:
case 3050:
case 1508:
case 3140:
case 3335:
case 3826:
case 1306:
case 361:
case 1324:
case 3876:
case 1652:
case 4056:
case 1966:
case 3563:
case 126:
case 649:
case 1301:
case 699:
case 2506:
case 25:
case 3805:
case 889:
case 3162:
case 1501:
case 1982:
case 1268:
case 1402:
case 3637:
case 64:
case 3652:
case 2752:
case 1252:
case 2153:
case 105:
case 1527:
case 585:
case 1631:
case 2291:
case 2682:
case 2319:
case 1007:
case 2571:
case 818:
case 3412:
case 2554:
case 1343:
case 29:
case 3329:
case 1979:
case 3643:
case 546:
case 1374:
case 3633:
case 1564:
case 1758:
case 3991:
case 1111:
case 2844:
case 2311:
case 1763:
case 3849:
case 784:
case 3871:
case 3249:
case 23:
case 3384:
case 2402:
case 353:
case 2272:
case 2790:
case 779:
case 2293:
case 1396:
case 2731:
case 2702:
case 1648:
case 691:
case 1323:
case 2340:
case 656:
case 40:
case 326:
case 3935:
case 1443:
case 184:
case 615:
case 3971:
case 4062:
case 2139:
case 3506:
case 2896:
case 2379:
case 718:
case 1692:
case 3278:
case 3511:
case 1262:
case 2939:
case 1248:
case 3541:
case 3242:
case 2337:
case 2835:
case 3582:
case 2270:
case 1861:
case 2136:
case 3775:
case 4026:
case 734:
case 3406:
case 2578:
case 4068:
case 3765:
case 920:
case 2666:
case 2730:
case 1582:
case 2965:
case 1581:
case 1372:
case 394:
case 212:
case 1729:
case 1750:
case 508:
case 3823:
case 4088:
case 3450:
case 1246:
case 2693:
case 1643:
case 806:
case 4004:
case 2234:
case 2254:
case 704:
case 3320:
case 3661:
case 1451:
case 1284:
case 3490:
case 3300:
case 3464:
case 1165:
case 48:
case 2110:
case 2349:
case 1222:
case 1513:
case 925:
case 1031:
case 3808:
case 450:
case 1076:
case 985:
case 3094:
case 3554:
case 3109:
case 1408:
case 2800:
case 3144:
case 3515:
case 2274:
case 1363:
case 3566:
case 2613:
case 1702:
case 2421:
case 3999:
case 2689:
case 2445:
case 2375:
case 3664:
case 1952:
case 1381:
case 1063:
case 4010:
case 919:
case 308:
case 3713:
case 224:
case 125:
case 2725:
case 1601:
case 1766:
case 2444:
case 1038:
case 581:
case 2741:
case 1922:
case 2753:
case 2074:
case 1367:
case 891:
case 3711:
case 545:
case 3523:
case 3197:
case 2828:
case 2512:
case 1850:
case 2240:
case 750:
case 1300:
case 2447:
case 1866:
case 1514:
case 2408:
case 1175:
case 1946:
case 1805:
case 3927:
case 1942:
case 3190:
case 3948:
case 3796:
case 2248:
case 960:
case 821:
case 3341:
case 4036:
case 2840:
case 3696:
case 2032:
case 80:
case 306:
case 2786:
case 3890:
case 864:
case 1006:
case 199:
case 347:
case 1671:
case 1128:
case 3188:
case 1844:
case 1654:
case 1418:
case 499:
case 2284:
case 410:
case 1868:
case 3440:
case 3195:
case 3266:
case 1024:
case 3379:
case 3259:
case 3517:
case 1280:
case 2134:
case 444:
case 3916:
case 3132:
case 2723:
case 2932:
case 3595:
case 2970:
case 2513:
case 2768:
case 135:
case 2209:
case 1492:
case 2009:
case 1079:
case 321:
case 2726:
case 1615:
case 129:
case 3792:
case 1816:
case 3403:
case 768:
case 95:
case 3466:
case 3829:
case 1535:
case 117:
case 3601:
case 3734:
case 1149:
case 3584:
case 1783:
case 3714:
case 3084:
case 3134:
case 3402:
case 438:
case 1670:
case 278:
case 2568:
case 1724:
case 1115:
case 209:
case 3417:
case 312:
case 1217:
case 2033:
case 1304:
case 836:
case 741:
case 1261:
case 1160:
case 3680:
case 1587:
case 3513:
case 2686:
case 837:
case 789:
case 3009:
case 1938:
case 899:
case 679:
case 3868:
case 1831:
case 3168:
case 2524:
case 458:
case 498:
case 3703:
case 1940:
case 44:
case 3749:
case 2317:
case 982:
case 1894:
case 1997:
case 4030:
case 3881:
case 3027:
case 1785:
case 1828:
case 3597:
case 1366:
case 183:
case 918:
case 3665:
case 3641:
case 3863:
case 3756:
case 3764:
case 2326:
case 3733:
case 3957:
case 2282:
case 3404:
case 1583:
case 840:
case 1706:
case 2905:
case 1380:
case 1389:
case 279:
case 1454:
case 1849:
case 2455:
case 2719:
case 4067:
case 4049:
case 1730:
case 747:
case 3836:
case 4011:
case 1625:
case 59:
case 2429:
case 1983:
case 526:
case 2993:
case 2392:
case 703:
case 220:
case 995:
case 2700:
case 1199:
case 2020:
case 3685:
case 3699:
case 3875:
case 1070:
case 2868:
case 3859:
case 351:
case 2734:
case 66:
case 2562:
case 2672:
case 737:
case 1365:
case 2261:
case 2967:
case 958:
case 2575:
case 2084:
case 1347:
case 2984:
case 1310:
case 3435:
case 3208:
case 2580:
case 2309:
case 3304:
case 2187:
case 3349:
case 1107:
case 4050:
case 1235:
case 2026:
case 3944:
case 1995:
case 2772:
case 2541:
case 830:
case 3899:
case 3142:
case 3746:
case 2888:
case 407:
case 694:
case 3945:
case 3014:
case 2804:
case 2545:
case 16:
case 128:
case 629:
case 3238:
case 513:
case 2661:
case 578:
case 3767:
case 3273:
case 3617:
case 482:
case 1787:
case 1449:
case 2679:
case 2142:
case 3803:
case 3268:
case 2848:
case 3737:
case 911:
case 204:
case 4006:
case 3254:
case 1973:
case 2164:
case 4024:
case 2755:
case 2225:
case 1116:
case 780:
case 492:
case 2131:
case 4075:
case 3434:
case 949:
case 3744:
case 2863:
case 658:
case 2745:
case 3256:
case 2070:
case 3166:
case 4003:
case 1853:
case 2766:
case 1094:
case 1158:
case 2322:
case 3074:
case 4085:
case 3754:
case 948:
case 3958:
case 884:
case 382:
case 3717:
case 39:
case 2675:
case 160:
case 4012:
case 2359:
case 1801:
case 3378:
case 1003:
case 2746:
case 3606:
case 419:
case 2531:
case 613:
case 1726:
case 2716:
case 1414:
case 3164:
case 1234:
case 3461:
case 1040:
case 3282:
case 2114:
case 3707:
case 1002:
case 2267:
case 221:
case 2346:
case 3399:
case 765:
case 2757:
case 150:
case 477:
case 770:
case 1430:
case 3305:
case 2016:
case 941:
case 740:
case 3730:
case 489:
case 529:
case 2179:
case 318:
case 2959:
case 3352:
case 1562:
case 2785:
case 2226:
case 2548:
case 1462:
case 1829:
case 3441:
case 2737:
case 3791:
case 1545:
case 2162:
case 3627:
case 2603:
case 2515:
case 422:
case 665:
case 2418:
case 1575:
case 3798:
case 167:
case 1444:
case 309:
case 1953:
case 599:
case 1970:
case 3619:
case 3989:
case 2058:
case 2451:
case 2750:
case 2869:
case 3739:
case 338:
case 1825:
case 1784:
case 3355:
case 1322:
case 3310:
case 1190:
case 3760:
case 1683:
case 94:
case 1608:
case 516:
case 2758:
case 3033:
case 2071:
case 1875:
case 1273:
case 1629:
case 2979:
case 4008:
case 72:
case 2807:
case 3024:
case 675:
case 429:
case 1798:
case 1421:
case 1960:
case 3502:
case 2387:
case 4029:
case 2244:
case 3382:
case 3372:
case 3141:
case 3567:
case 3344:
case 3889:
case 134:
case 242:
case 392:
case 192:
case 1339:
case 83:
case 1255:
case 1576:
case 428:
case 527:
case 2233:
case 270:
case 2361:
case 2241:
case 3872:
case 1152:
case 2523:
case 3386:
case 2637:
case 1435:
case 1747:
case 625:
case 521:
case 2601:
case 1908:
case 944:
case 1676:
case 2759:
case 43:
case 3629:
case 1026:
case 2625:
case 3644:
case 2292:
case 3301:
case 875:
case 1803:
case 1259:
case 3565:
case 490:
case 3710:
case 201:
case 1321:
case 2810:
case 3906:
case 1517:
case 2827:
case 3397:
case 1924:
case 2143:
case 2102:
case 3500:
case 3529:
case 816:
case 2258:
case 86:
case 3519:
case 1000:
case 2597:
case 1876:
case 850:
case 2105:
case 1856:
case 1162:
case 2854:
case 2265:
case 3343:
case 854:
case 244:
case 2542:
case 4072:
case 3155:
case 2384:
case 222:
case 142:
case 1126:
case 1207:
case 2062:
case 3993:
case 1488:
case 763:
case 2536:
case 1570:
case 3003:
case 3907:
case 1563:
case 1857:
case 155:
case 132:
case 3540:
case 2469:
case 810:
case 3443:
case 1677:
case 981:
case 2971:
case 435:
case 4066:
case 3673:
case 3427:
case 1723:
case 3063:
case 3029:
case 690:
case 5:
case 2550:
case 3527:
case 2100:
case 3719:
case 614:
case 2787:
case 2189:
case 3992:
case 445:
case 1999:
case 1968:
case 3477:
case 3740:
case 1314:
case 2944:
case 1788:
case 3594:
case 3388:
case 2744:
case 931:
case 487:
case 1748:
case 839:
case 3420:
case 912:
case 999:
case 2912:
case 49:
case 3942:
case 2067:
case 2916:
case 2034:
case 1569:
case 1914:
case 2098:
case 631:
case 3012:
case 368:
case 1423:
case 3735:
case 2416:
case 2565:
case 2377:
case 2192:
case 1359:
case 2754:
case 3143:
case 1665:
case 1936:
case 611:
case 2530:
case 2960:
case 3626:
case 439:
case 2953:
case 381:
case 589:
case 3478:
case 3296:
case 1765:
case 3121:
case 4032:
case 2927:
case 1532:
case 2466:
case 2351:
case 1020:
case 277:
case 1327:
case 1548:
case 1216:
case 1081:
case 3917:
case 451:
case 1193:
case 1538:
case 2535:
case 3374:
case 3114:
case 2816:
case 378:
case 3570:
case 2155:
case 3556:
case 294:
case 2976:
case 265:
case 2706:
case 1611:
case 2308:
case 208:
case 2937:
case 1950:
case 3133:
case 771:
case 161:
case 211:
case 1368:
case 2113:
case 879:
case 2277:
case 2511:
case 2350:
case 3158:
case 1483:
case 3488:
case 537:
case 3880:
case 945:
case 1016:
case 1148:
case 2961:
case 2367:
case 950:
case 2314:
case 2543:
case 2973:
case 3170:
case 63:
case 3000:
case 3058:
case 2962:
case 3954:
case 1593:
case 2448:
case 746:
case 1993:
case 3257:
case 2175:
case 4073:
case 131:
case 3419:
case 3106:
case 2989:
case 571:
case 1277:
case 1239:
case 426:
case 635:
case 1896:
case 1789:
case 1345:
case 1035:
case 2220:
case 1019:
case 2906:
case 2557:
case 206:
case 3192:
case 147:
case 1759:
case 2388:
case 1707:
case 2866:
case 1609:
case 3962:
case 653:
case 524:
case 2468:
case 470:
case 2765:
case 377:
case 1762:
case 3729:
case 3851:
case 1050:
case 2122:
case 3763:
case 2276:
case 3241:
case 315:
case 3895:
case 3581:
case 2499:
case 1333:
case 3073:
case 1827:
case 1361:
case 3492:
case 4041:
case 3770:
case 673:
case 3794:
case 1245:
case 2843:
case 2012:
case 53:
case 2064:
case 3684:
case 93:
case 1813:
case 1673:
case 1057:
case 456:
case 2658:
case 3181:
case 2492:
case 760:
case 3115:
case 1054:
case 1308:
case 772:
case 2886:
case 972:
case 38:
case 2242:
case 1272:
case 2777:
case 1371:
case 2488:
case 3071:
case 1732:
case 345:
case 2127:
case 2705:
case 3202:
case 2811:
case 969:
case 3574:
case 2647:
case 2453:
case 2769:
case 813:
case 4095:
case 2572:
case 1164:
case 2015:
case 3642:
case 447:
case 729:
case 1874:
case 1820:
case 2510:
case 3592:
case 3152:
case 1574:
case 1251:
case 3878:
case 3316:
case 3328:
case 3555:
case 908:
case 3157:
case 3200:
case 2406:
case 2836:
case 1167:
case 1075:
case 764:
case 628:
case 2805:
case 1100:
case 738:
case 1510:
case 4034:
case 3959:
case 3504:
case 3915:
case 900:
case 77:
case 1531:
case 3294:
case 3066:
case 1316:
case 2431:
case 1139:
case 1041:
case 1121:
case 2007:
case 2662:
case 288:
case 1064:
case 688:
case 2879:
case 1947:
case 1441:
case 4022:
case 2645:
case 2218:
case 3230:
case 3194:
case 3362:
case 2900:
case 2688:
case 1204:
case 3380:
case 1146:
case 324:
case 3654:
case 3371:
case 3032:
case 3780:
case 2654:
case 1756:
case 1865:
case 3674:
case 1588:
case 2812:
case 3544:
case 325:
case 3538:
case 1934:
case 3865:
case 936:
case 3688:
case 2259:
case 1553:
case 469:
case 124:
case 882:
case 2345:
case 2496:
case 4000:
case 3112:
case 2473:
case 1071:
case 2771:
case 3297:
case 4055:
case 3148:
case 464:
case 10:
case 3001:
case 3677:
case 2144:
case 803:
case 1202:
case 2208:
case 2885:
case 1520:
case 2360:
case 1511:
case 2145:
case 2125:
case 3526:
case 1274:
case 3870:
case 3583:
case 2626:
case 1858:
case 3512:
case 2001:
case 798:
case 1163:
case 3693:
case 2077:
case 342:
case 4084:
case 3472:
case 2184:
case 1096:
case 3425:
case 1752:
case 504:
case 3451:
case 3347:
case 1238:
case 462:
case 684:
case 1290:
case 2503:
case 2307:
case 254:
case 2838:
case 4043:
case 1680:
case 3790:
case 1620:
case 461:
case 2313:
case 1335:
case 1843:
case 399:
case 2025:
case 2430:
case 991:
case 1590:
case 1991:
case 917:
case 1171:
case 3088:
case 3163:
case 518:
case 350:
case 3732:
case 273:
case 1691:
case 2398:
case 1547:
case 3936:
case 1656:
case 468:
case 3018:
case 2083:
case 391:
case 1085:
case 1916:
case 3867:
case 284:
case 3075:
case 1471:
case 198:
case 2126:
case 2300:
case 3431:
case 2547:
case 978:
case 2159:
case 2894:
case 3533:
case 2247:
case 301:
case 2089:
case 285:
case 463:
case 3279:
case 2440:
case 3006:
case 1065:
case 1453:
case 1872:
case 2958:
case 3165:
case 682:
case 1317:
case 3908:
case 1131:
case 174:
case 28:
case 1005:
case 3941:
case 3616:
case 1599:
case 3598:
case 3508:
case 1001:
case 2206:
case 139:
case 4013:
case 1880:
case 3706:
case 3471:
case 2480:
case 3211:
case 1507:
case 1864:
case 1037:
case 2441:
case 3219:
case 2884:
case 483:
case 2818:
case 3250:
case 643:
case 2493:
case 2890:
case 3779:
case 100:
case 365:
case 946:
case 17:
case 2549:
case 1985:
case 2119:
case 75:
case 474:
case 2022:
case 2383:
case 2527:
case 2069:
case 3977:
case 971:
case 3902:
case 2773:
case 686:
case 1137:
case 3579:
case 1241:
case 1078:
case 4009:
case 2006:
case 313:
case 2709:
case 1189:
case 3255:
case 1860:
case 2385:
case 1231:
case 3093:
case 2394:
case 2915:
case 1406:
case 1558:
case 443:
case 269:
case 2140:
case 1095:
case 2929:
case 60:
case 3198:
case 2362:
case 842:
case 84:
case 987:
case 1854:
case 3951:
case 3873:
case 1123:
case 2210:
case 2791:
case 2295:
case 2031:
case 2798:
case 639:
case 1091:
case 3423:
case 3605:
case 3210:
case 1975:
case 2930:
case 96:
case 1208:
case 2141:
case 1693:
case 708:
case 193:
case 3269:
case 1330:
case 1023:
case 3953:
case 478:
case 3127:
case 2056:
case 2321:
case 1797:
case 2280:
case 1776:
case 3608:
case 2983:
case 1718:
case 2760:
case 1370:
case 1819:
case 1289:
case 3655:
case 3507:
case 1755:
case 1753:
case 3997:
case 2570:
case 2834:
case 2991:
case 2223:
case 158:
case 2923:
case 2174:
case 417:
case 2552:
case 3036:
case 2198:
case 3306:
case 696:
case 2913:
case 719:
case 829:
case 1770:
case 1351:
case 3663:
case 3918:
case 2555:
case 3314:
case 1572:
case 3774:
case 3938:
case 237:
case 2000:
case 2107:
case 3580:
case 687:
case 2922:
case 87:
case 3638:
case 572:
case 3569:
case 580:
case 742:
case 2166:
case 1010:
case 1954:
case 2663:
case 3939:
case 3008:
case 2212:
case 283:
case 888:
case 1452:
case 349:
case 2075:
case 3373:
case 1681:
case 1133:
case 1461:
case 1214:
case 849:
case 558:
case 3059:
case 2532:
case 2285:
case 2294:
case 213:
case 1972:
case 862:
case 2204:
case 3766:
case 3354:
case 3961:
case 756:
case 1493:
case 1926:
case 3467:
case 3833:
case 2419:
case 3640:
case 1305:
case 2677:
case 3401:
case 618:
case 1974:
case 1715:
case 3069:
case 296:
case 3394:
case 4035:
case 3934:
case 3010:
case 1834:
case 2393:
case 1873:
case 1949:
case 528:
case 1112:
case 2334:
case 3321:
case 3054:
case 2780:
case 988:
case 2478:
case 910:
case 3339:
case 834:
case 235:
case 1814:
case 3682:
case 335:
case 3869:
case 3799:
case 3728:
case 113:
case 2850:
case 1542:
case 3302:
case 2316:
case 3271:
case 3315:
case 2883:
case 1649:
case 1012:
case 1808:
case 1326:
case 2117:
case 4048:
case 959:
case 782:
case 2106:
case 2649:
case 2636:
case 1734:
case 1427:
case 1226:
case 596:
case 341:
case 3303:
case 91:
case 3995:
case 3030:
case 1342:
case 974:
case 2424:
case 2415:
case 3913:
case 2539:
case 2149:
case 636:
case 2617:
case 3261:
case 1467:
case 3062:
case 2283:
case 2747:
case 2443:
case 3635:
case 1229:
case 2086:
case 387:
case 259:
case 3666:
case 3022:
case 3171:
case 3834:
case 2775:
case 1436:
case 706:
case 3465:
case 1355:
case 3099:
case 621:
case 3356:
case 2924:
case 286:
case 2369:
case 2514:
case 1390:
case 2386:
case 3082:
case 2304:
case 493:
case 1391:
case 1795:
case 3802:
case 2374:
case 1859:
case 3159:
case 218:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1675011601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,];
var gg_b = "1675011601/";

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
