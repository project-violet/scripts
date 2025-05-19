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
case 938:
case 1069:
case 1871:
case 585:
case 57:
case 568:
case 1389:
case 3889:
case 906:
case 3037:
case 4077:
case 1942:
case 1499:
case 3659:
case 1723:
case 2831:
case 2513:
case 1908:
case 1698:
case 1210:
case 816:
case 3697:
case 3257:
case 3468:
case 1239:
case 3827:
case 2953:
case 3172:
case 1097:
case 1327:
case 1828:
case 799:
case 3314:
case 3098:
case 853:
case 1814:
case 2391:
case 1500:
case 2021:
case 151:
case 1696:
case 3332:
case 2980:
case 1191:
case 454:
case 2872:
case 2749:
case 2127:
case 22:
case 3719:
case 2515:
case 196:
case 3561:
case 3545:
case 1482:
case 654:
case 2588:
case 64:
case 3622:
case 2205:
case 1784:
case 1906:
case 1036:
case 2189:
case 1689:
case 1859:
case 1104:
case 2709:
case 3176:
case 97:
case 2901:
case 3793:
case 3338:
case 549:
case 1229:
case 35:
case 538:
case 2245:
case 2261:
case 3215:
case 1415:
case 2773:
case 1627:
case 621:
case 3628:
case 2582:
case 1398:
case 3505:
case 1014:
case 3898:
case 1733:
case 3288:
case 1488:
case 2196:
case 1287:
case 523:
case 3027:
case 1902:
case 1032:
case 1735:
case 1948:
case 3626:
case 1486:
case 764:
case 2599:
case 3896:
case 2775:
case 3121:
case 3213:
case 2198:
case 3754:
case 679:
case 3322:
case 3092:
case 1177:
case 2567:
case 3579:
case 273:
case 2557:
case 3720:
case 1262:
case 71:
case 2400:
case 177:
case 1692:
case 1581:
case 1419:
case 285:
case 755:
case 2249:
case 27:
case 756:
case 1334:
case 408:
case 2593:
case 286:
case 941:
case 3142:
case 3509:
case 2112:
case 435:
case 1430:
case 2374:
case 436:
case 222:
case 1756:
case 840:
case 636:
case 2932:
case 1855:
case 1685:
case 3050:
case 2311:
case 3060:
case 3484:
case 2705:
case 3341:
case 3365:
case 3024:
case 791:
case 4047:
case 1660:
case 642:
case 1225:
case 3617:
case 2647:
case 3085:
case 3083:
case 3423:
case 2928:
case 3363:
case 159:
case 3944:
case 3991:
case 1853:
case 316:
case 2134:
case 3601:
case 3757:
case 1768:
case 2520:
case 1174:
case 1710:
case 2808:
case 2595:
case 3812:
case 2554:
case 2307:
case 1312:
case 1758:
case 2842:
case 2779:
case 3904:
case 488:
case 206:
case 3713:
case 2674:
case 541:
case 3786:
case 238:
case 2936:
case 2006:
case 1634:
case 3860:
case 1360:
case 2848:
case 1318:
case 1324:
case 1094:
case 1041:
case 1065:
case 3317:
case 3680:
case 2347:
case 1762:
case 666:
case 1080:
case 3295:
case 223:
case 1420:
case 3220:
case 3885:
case 898:
case 688:
case 3254:
case 665:
case 629:
case 1147:
case 1729:
case 2150:
case 3663:
case 1316:
case 3549:
case 2519:
case 3883:
case 844:
case 2124:
case 1570:
case 92:
case 3293:
case 3653:
case 2160:
case 85:
case 2997:
case 2185:
case 1063:
case 174:
case 573:
case 2969:
case 4007:
case 1787:
case 1612:
case 1978:
case 2751:
case 3012:
case 2042:
case 767:
case 671:
case 2273:
case 118:
case 2008:
case 3857:
case 410:
case 1504:
case 3015:
case 1810:
case 3687:
case 2045:
case 3576:
case 3712:
case 1688:
case 2742:
case 983:
case 798:
case 2444:
case 3088:
case 2491:
case 1228:
case 1214:
case 3414:
case 503:
case 590:
case 1427:
case 31:
case 3339:
case 1763:
case 104:
case 569:
case 3471:
case 1271:
case 526:
case 948:
case 3105:
case 401:
case 610:
case 3899:
case 364:
case 582:
case 3289:
case 3292:
case 3882:
case 2600:
case 1382:
case 1780:
case 3970:
case 3662:
case 867:
case 994:
case 1062:
case 3521:
case 192:
case 2167:
case 2706:
case 43:
case 1577:
case 1232:
case 3366:
case 1856:
case 2157:
case 3578:
case 2537:
case 3086:
case 2990:
case 180:
case 2043:
case 3734:
case 2925:
case 2851:
case 2592:
case 1058:
case 990:
case 681:
case 1315:
case 3057:
case 891:
case 2861:
case 3668:
case 2640:
case 1297:
case 3387:
case 3610:
case 1909:
case 2113:
case 1388:
case 1667:
case 1498:
case 3469:
case 1269:
case 184:
case 856:
case 3572:
case 3329:
case 3099:
case 502:
case 3237:
case 926:
case 539:
case 969:
case 740:
case 3438:
case 813:
case 481:
case 1973:
case 1975:
case 111:
case 3785:
case 66:
case 3422:
case 3082:
case 594:
case 2748:
case 2935:
case 1852:
case 414:
case 3724:
case 1682:
case 1591:
case 1544:
case 2702:
case 2527:
case 1862:
case 3436:
case 1236:
case 3750:
case 297:
case 3145:
case 1066:
case 614:
case 100:
case 193:
case 478:
case 2843:
case 3666:
case 2589:
case 1386:
case 3465:
case 1265:
case 1241:
case 3494:
case 3384:
case 2411:
case 1884:
case 2966:
case 1664:
case 3020:
case 1280:
case 3095:
case 632:
case 367:
case 19:
case 2075:
case 409:
case 663:
case 2370:
case 3635:
case 3546:
case 3819:
case 225:
case 269:
case 1035:
case 446:
case 2474:
case 1732:
case 2206:
case 931:
case 2119:
case 3502:
case 3149:
case 1547:
case 2550:
case 1728:
case 747:
case 3548:
case 2518:
case 1903:
case 2242:
case 3633:
case 2130:
case 3789:
case 2958:
case 3940:
case 90:
case 2731:
case 3093:
case 2968:
case 3323:
case 2910:
case 1693:
case 1253:
case 2009:
case 2939:
case 997:
case 1771:
case 575:
case 158:
case 3981:
case 58:
case 1263:
case 715:
case 3690:
case 2202:
case 3417:
case 337:
case 1418:
case 3260:
case 1460:
case 433:
case 2248:
case 2776:
case 3854:
case 2512:
case 1354:
case 689:
case 3684:
case 3542:
case 628:
case 1722:
case 3285:
case 1485:
case 1364:
case 1395:
case 899:
case 3508:
case 860:
case 2049:
case 3796:
case 1630:
case 961:
case 428:
case 462:
case 2962:
case 4070:
case 3900:
case 202:
case 3175:
case 2721:
case 617:
case 1797:
case 3401:
case 975:
case 1945:
case 1483:
case 3283:
case 597:
case 1951:
case 3737:
case 355:
case 1416:
case 417:
case 2164:
case 1574:
case 1759:
case 2120:
case 50:
case 313:
case 3506:
case 1769:
case 2987:
case 2154:
case 2463:
case 960:
case 749:
case 861:
case 3939:
case 3968:
case 2093:
case 3731:
case 1957:
case 706:
case 2940:
case 2789:
case 1967:
case 705:
case 3130:
case 212:
case 723:
case 4033:
case 3073:
case 3242:
case 3560:
case 1744:
case 1791:
case 3524:
case 999:
case 1517:
case 3119:
case 934:
case 1406:
case 88:
case 3206:
case 69:
case 1274:
case 3474:
case 564:
case 876:
case 109:
case 132:
case 2830:
case 1349:
case 2635:
case 3516:
case 3772:
case 145:
case 607:
case 2819:
case 2546:
case 1982:
case 3583:
case 326:
case 3370:
case 2234:
case 1870:
case 2054:
case 2792:
case 2390:
case 51:
case 390:
case 303:
case 407:
case 2325:
case 163:
case 3966:
case 2494:
case 2441:
case 3956:
case 1211:
case 1123:
case 2384:
case 3809:
case 1309:
case 3164:
case 722:
case 3778:
case 4023:
case 213:
case 255:
case 768:
case 77:
case 930:
case 3534:
case 786:
case 117:
case 2798:
case 291:
case 1541:
case 419:
case 3721:
case 2175:
case 1563:
case 1649:
case 2173:
case 348:
case 2030:
case 2900:
case 3670:
case 3962:
case 897:
case 1375:
case 1133:
case 964:
case 3049:
case 2019:
case 162:
case 2796:
case 1704:
case 2285:
case 383:
case 2864:
case 1913:
case 487:
case 3512:
case 3776:
case 2542:
case 2684:
case 4025:
case 1448:
case 4090:
case 91:
case 3447:
case 2690:
case 1402:
case 3202:
case 230:
case 2013:
case 956:
case 2426:
case 692:
case 38:
case 2086:
case 3272:
case 13:
case 1774:
case 2356:
case 1168:
case 3706:
case 2179:
case 913:
case 825:
case 3805:
case 890:
case 1000:
case 512:
case 1597:
case 991:
case 3199:
case 492:
case 2970:
case 4052:
case 2292:
case 1919:
case 3600:
case 361:
case 2289:
case 404:
case 1431:
case 2105:
case 3182:
case 1303:
case 21:
case 1536:
case 937:
case 1661:
case 1645:
case 1291:
case 3491:
case 1244:
case 1881:
case 110:
case 2414:
case 1166:
case 604:
case 1707:
case 2712:
case 2576:
case 1522:
case 3742:
case 3340:
case 1840:
case 2368:
case 3045:
case 3708:
case 1156:
case 2296:
case 2656:
case 1954:
case 513:
case 30:
case 848:
case 1920:
case 1343:
case 2666:
case 839:
case 3188:
case 4056:
case 2151:
case 556:
case 1571:
case 2161:
case 397:
case 493:
case 400:
case 3115:
case 178:
case 600:
case 2750:
case 1747:
case 1129:
case 2362:
case 3527:
case 883:
case 1514:
case 3005:
case 411:
case 1528:
case 2352:
case 3300:
case 2724:
case 591:
case 1605:
case 912:
case 1476:
case 3404:
case 2438:
case 1152:
case 2099:
case 2716:
case 72:
case 3278:
case 2459:
case 234:
case 3003:
case 6:
case 1277:
case 3477:
case 2888:
case 4010:
case 4:
case 3221:
case 1421:
case 1081:
case 2658:
case 2298:
case 1679:
case 2143:
case 3186:
case 4058:
case 2497:
case 3640:
case 1040:
case 894:
case 3845:
case 3861:
case 967:
case 2639:
case 1361:
case 1345:
case 684:
case 1351:
case 537:
case 3851:
case 4039:
case 3079:
case 3681:
case 1989:
case 659:
case 3307:
case 2812:
case 3779:
case 2106:
case 2767:
case 3842:
case 1740:
case 2757:
case 3595:
case 3808:
case 783:
case 215:
case 216:
case 157:
case 1781:
case 4001:
case 540:
case 1927:
case 3914:
case 2363:
case 1180:
case 3703:
case 748:
case 2799:
case 1155:
case 459:
case 2575:
case 2083:
case 2617:
case 2085:
case 3647:
case 1163:
case 3705:
case 1811:
case 3048:
case 2484:
case 2060:
case 3311:
case 1533:
case 2018:
case 2365:
case 1047:
case 322:
case 1874:
case 3374:
case 2230:
case 2108:
case 3806:
case 3112:
case 3593:
case 2834:
case 1270:
case 386:
case 385:
case 3249:
case 1449:
case 368:
case 2715:
case 3273:
case 1473:
case 2301:
case 3761:
case 674:
case 1937:
case 2012:
case 3042:
case 598:
case 2433:
case 3959:
case 1608:
case 1998:
case 3185:
case 171:
case 1409:
case 3124:
case 474:
case 2883:
case 3118:
case 841:
case 4063:
case 725:
case 4053:
case 940:
case 2816:
case 3150:
case 2663:
case 3846:
case 2694:
case 2641:
case 2665:
case 427:
case 143:
case 1302:
case 3802:
case 3116:
case 1847:
case 873:
case 4080:
case 2818:
case 247:
case 1700:
case 3183:
case 3936:
case 166:
case 129:
case 349:
case 165:
case 2435:
case 338:
case 55:
case 305:
case 627:
case 3922:
case 2786:
case 1606:
case 3743:
case 2904:
case 2034:
case 1523:
case 1475:
case 306:
case 620:
case 553:
case 4022:
case 3604:
case 3189:
case 496:
case 1676:
case 2974:
case 3588:
case 3205:
case 1405:
case 516:
case 2551:
case 2282:
case 4036:
case 2892:
case 1934:
case 1004:
case 2561:
case 515:
case 14:
case 32:
case 3127:
case 3749:
case 1529:
case 2719:
case 2096:
case 1114:
case 2332:
case 696:
case 952:
case 885:
case 3955:
case 2911:
case 731:
case 3994:
case 886:
case 3941:
case 3965:
case 2328:
case 2314:
case 1844:
case 1891:
case 3344:
case 947:
case 2439:
case 1126:
case 2410:
case 2697:
case 1240:
case 3440:
case 2267:
case 3279:
case 2458:
case 1132:
case 1621:
case 4059:
case 3831:
case 2669:
case 3677:
case 3513:
case 2037:
case 2907:
case 70:
case 1912:
case 2659:
case 3203:
case 2371:
case 915:
case 3400:
case 823:
case 1539:
case 3137:
case 2720:
case 1159:
case 373:
case 2764:
case 477:
case 2754:
case 3876:
case 2579:
case 2213:
case 2632:
case 2121:
case 3775:
case 849:
case 1443:
case 3198:
case 838:
case 3599:
case 3072:
case 761:
case 1960:
case 1918:
case 2503:
case 806:
case 179:
case 4026:
case 805:
case 2947:
case 1950:
case 1321:
case 1091:
case 3821:
case 2628:
case 624:
case 547:
case 3251:
case 1451:
case 3644:
case 3245:
case 1461:
case 1445:
case 3261:
case 4028:
case 3773:
case 4014:
case 2837:
case 78:
case 2671:
case 25:
case 1136:
case 2793:
case 776:
case 424:
case 4071:
case 1877:
case 1122:
case 3709:
case 244:
case 3878:
case 1378:
case 341:
case 121:
case 2986:
case 1542:
case 3354:
case 3025:
case 2913:
case 1864:
case 1285:
case 3485:
case 3943:
case 1625:
case 3450:
case 2247:
case 1690:
case 811:
case 3460:
case 3084:
case 2448:
case 387:
case 1224:
case 3418:
case 1218:
case 901:
case 1030:
case 1900:
case 3619:
case 228:
case 2649:
case 759:
case 800:
case 3835:
case 2563:
case 1796:
case 262:
case 2133:
case 2375:
case 2373:
case 2135:
case 1401:
case 2580:
case 1333:
case 1175:
case 8:
case 2541:
case 3511:
case 3797:
case 2555:
case 514:
case 113:
case 3574:
case 2988:
case 1623:
case 2777:
case 884:
case 3738:
case 1283:
case 3023:
case 93:
case 1893:
case 578:
case 694:
case 892:
case 3825:
case 1325:
case 3890:
case 2501:
case 682:
case 1054:
case 167:
case 2123:
case 3884:
case 490:
case 625:
case 3265:
case 3654:
case 1441:
case 1465:
case 1494:
case 1455:
case 232:
case 1830:
case 209:
case 426:
case 2274:
case 3035:
case 880:
case 2406:
case 690:
case 603:
case 981:
case 3732:
case 425:
case 2675:
case 1234:
case 482:
case 2982:
case 3319:
case 3726:
case 501:
case 2349:
case 1212:
case 2207:
case 2442:
case 112:
case 1149:
case 2517:
case 2791:
case 3903:
case 3728:
case 4073:
case 3170:
case 3714:
case 96:
case 978:
case 1463:
case 3771:
case 2125:
case 3979:
case 2967:
case 4009:
case 1789:
case 2184:
case 1093:
case 1387:
case 1610:
case 3039:
case 4079:
case 1668:
case 533:
case 3657:
case 3667:
case 3498:
case 1298:
case 1888:
case 631:
case 3058:
case 1067:
case 1639:
case 3:
case 796:
case 3068:
case 3701:
case 2603:
case 1237:
case 946:
case 2526:
case 1572:
case 3829:
case 528:
case 1716:
case 2162:
case 1099:
case 431:
case 945:
case 4003:
case 1783:
case 3100:
case 1469:
case 932:
case 384:
case 134:
case 3699:
case 281:
case 1459:
case 3259:
case 2800:
case 1724:
case 3591:
case 1718:
case 3544:
case 2528:
case 3852:
case 2514:
case 3236:
case 3862:
case 1436:
case 1362:
case 4005:
case 2204:
case 311:
case 1785:
case 3975:
case 1422:
case 3222:
case 3313:
case 1666:
case 2343:
case 1886:
case 3386:
case 2954:
case 1656:
case 2187:
case 1296:
case 26:
case 278:
case 1161:
case 1145:
case 2571:
case 517:
case 40:
case 1428:
case 3228:
case 3214:
case 1414:
case 210:
case 2244:
case 2291:
case 2645:
case 4051:
case 3839:
case 1227:
case 3427:
case 11:
case 1310:
case 2840:
case 3504:
case 3858:
case 2379:
case 2522:
case 1576:
case 2166:
case 858:
case 2431:
case 532:
case 164:
case 3399:
case 2303:
case 304:
case 3271:
case 1471:
case 201:
case 3763:
case 3753:
case 461:
case 928:
case 989:
case 3062:
case 2597:
case 3755:
case 1521:
case 2000:
case 2930:
case 3794:
case 3765:
case 3741:
case 2305:
case 68:
case 1882:
case 3492:
case 3780:
case 23:
case 1086:
case 2472:
case 917:
case 2139:
case 3226:
case 2538:
case 380:
case 1734:
case 3613:
case 1432:
case 3232:
case 1366:
case 2643:
case 2559:
case 724:
case 476:
case 2774:
case 2110:
case 1435:
case 3235:
case 758:
case 265:
case 406:
case 550:
case 3634:
case 1713:
case 449:
case 2475:
case 2523:
case 1904:
case 1034:
case 1786:
case 521:
case 4006:
case 3385:
case 243:
case 1220:
case 3080:
case 3495:
case 1665:
case 3454:
case 1254:
case 2996:
case 2700:
case 3318:
case 327:
case 1824:
case 147:
case 3094:
case 3041:
case 1860:
case 3360:
case 2011:
case 2847:
case 2302:
case 3817:
case 1146:
case 606:
case 374:
case 152:
case 271:
case 3063:
case 2117:
case 579:
case 2346:
case 1102:
case 3729:
case 1816:
case 1549:
case 3316:
case 1653:
case 2937:
case 79:
case 1301:
case 3801:
case 318:
case 1715:
case 3787:
case 1977:
case 707:
case 2642:
case 3978:
case 2584:
case 3233:
case 1433:
case 1788:
case 485:
case 47:
case 921:
case 2306:
case 208:
case 820:
case 1230:
case 486:
case 2874:
case 3756:
case 950:
case 235:
case 3419:
case 1219:
case 422:
case 236:
case 2270:
case 370:
case 1834:
case 851:
case 622:
case 3618:
case 3624:
case 2648:
case 2153:
case 3660:
case 3650:
case 1490:
case 719:
case 1573:
case 1425:
case 1617:
case 3880:
case 2047:
case 1365:
case 1394:
case 1018:
case 3894:
case 896:
case 2533:
case 668:
case 67:
case 1060:
case 3284:
case 359:
case 2535:
case 3863:
case 54:
case 3853:
case 1353:
case 3683:
case 979:
case 4046:
case 1423:
case 3111:
case 2194:
case 2141:
case 1083:
case 2155:
case 3174:
case 1757:
case 2740:
case 3931:
case 2342:
case 1106:
case 2807:
case 3312:
case 2989:
case 3739:
case 1601:
case 935:
case 3838:
case 441:
case 588:
case 1429:
case 3229:
case 3337:
case 1089:
case 1837:
case 221:
case 2378:
case 3104:
case 3689:
case 3071:
case 2556:
case 942:
case 1176:
case 1369:
case 2122:
case 908:
case 2091:
case 3733:
case 3488:
case 1288:
case 818:
case 3028:
case 792:
case 1898:
case 3014:
case 3287:
case 2445:
case 2983:
case 3946:
case 1614:
case 641:
case 1896:
case 3026:
case 571:
case 1286:
case 3486:
case 2985:
case 1213:
case 673:
case 2950:
case 279:
case 2924:
case 1626:
case 1503:
case 2918:
case 957:
case 3836:
case 3262:
case 1452:
case 3252:
case 2138:
case 1322:
case 2558:
case 2169:
case 1092:
case 3177:
case 1579:
case 1754:
case 1795:
case 1764:
case 3540:
case 1178:
case 1720:
case 2804:
case 2678:
case 3942:
case 1299:
case 1659:
case 2912:
case 3389:
case 1889:
case 1037:
case 542:
case 793:
case 859:
case 3908:
case 4078:
case 1669:
case 2331:
case 1543:
case 536:
case 929:
case 3069:
case 988:
case 2077:
case 3059:
case 535:
case 3871:
case 1827:
case 2562:
case 1172:
case 3097:
case 3239:
case 1439:
case 3500:
case 2891:
case 2844:
case 3828:
case 1314:
case 2281:
case 1098:
case 3814:
case 1328:
case 2132:
case 3698:
case 3258:
case 943:
case 1697:
case 2240:
case 3457:
case 3268:
case 4021:
case 711:
case 2770:
case 2114:
case 2128:
case 472:
case 3191:
case 3144:
case 1326:
case 2529:
case 254:
case 3256:
case 3696:
case 784:
case 351:
case 1911:
case 870:
case 42:
case 971:
case 3832:
case 3266:
case 1466:
case 62:
case 1622:
case 3784:
case 2676:
case 3036:
case 3906:
case 396:
case 1561:
case 2934:
case 1636:
case 1551:
case 3804:
case 498:
case 3568:
case 1557:
case 173:
case 2177:
case 3558:
case 3169:
case 3376:
case 2581:
case 843:
case 3138:
case 1137:
case 518:
case 2836:
case 3918:
case 3924:
case 3672:
case 2948:
case 2735:
case 3950:
case 959:
case 2032:
case 1243:
case 3443:
case 3985:
case 1198:
case 2413:
case 2026:
case 866:
case 1599:
case 3197:
case 2486:
case 1072:
case 644:
case 1691:
case 3451:
case 1251:
case 4027:
case 2415:
case 3445:
case 1261:
case 1245:
case 2287:
case 3044:
case 2733:
case 3321:
case 65:
case 2028:
case 2398:
case 1709:
case 3566:
case 4089:
case 3877:
case 3122:
case 3631:
case 45:
case 1878:
case 2104:
case 2859:
case 2071:
case 2689:
case 224:
case 73:
case 2838:
case 1901:
case 1031:
case 871:
case 350:
case 2392:
case 2022:
case 918:
case 295:
case 2725:
case 296:
case 3171:
case 1515:
case 3004:
case 3587:
case 1189:
case 2906:
case 3405:
case 1205:
case 974:
case 835:
case 2696:
case 2256:
case 354:
case 836:
case 251:
case 3372:
case 34:
case 1749:
case 1127:
case 3114:
case 220:
case 3770:
case 2144:
case 2191:
case 2268:
case 2457:
case 3240:
case 857:
case 3132:
case 3621:
case 2698:
case 3844:
case 3891:
case 2500:
case 1391:
case 1344:
case 3552:
case 2814:
case 1481:
case 2828:
case 2327:
case 1953:
case 927:
case 2239:
case 3126:
case 1078:
case 3403:
case 1203:
case 778:
case 4037:
case 3077:
case 2069:
case 1831:
case 3331:
case 2723:
case 1586:
case 2942:
case 2389:
case 3912:
case 3584:
case 2978:
case 3642:
case 2612:
case 1969:
case 3525:
case 995:
case 1273:
case 3937:
case 3007:
case 996:
case 652:
case 577:
case 1160:
case 2570:
case 2383:
case 1118:
case 452:
case 1519:
case 3117:
case 2316:
case 2729:
case 2147:
case 274:
case 1530:
case 2063:
case 850:
case 732:
case 1185:
case 1997:
case 2053:
case 1209:
case 3847:
case 2762:
case 1347:
case 2350:
case 2817:
case 3302:
case 2041:
case 2094:
case 3700:
case 1183:
case 2752:
case 123:
case 2464:
case 447:
case 2080:
case 105:
case 647:
case 1674:
case 1275:
case 3606:
case 1743:
case 3523:
case 4034:
case 3074:
case 329:
case 149:
case 365:
case 977:
case 596:
case 453:
case 1842:
case 2758:
case 3989:
case 2312:
case 415:
case 1564:
case 1808:
case 3308:
case 2174:
case 2001:
case 616:
case 551:
case 615:
case 3165:
case 3194:
case 520:
case 3927:
case 2683:
case 3180:
case 4083:
case 728:
case 2865:
case 3533:
case 2894:
case 3811:
case 1705:
case 4085:
case 1311:
case 3047:
case 2685:
case 2017:
case 2855:
case 2290:
case 4018:
case 2225:
case 2624:
case 2618:
case 2660:
case 854:
case 1593:
case 270:
case 1470:
case 1249:
case 3992:
case 335:
case 2756:
case 122:
case 3874:
case 342:
case 2766:
case 2107:
case 3306:
case 84:
case 1806:
case 862:
case 36:
case 2056:
case 3571:
case 197:
case 460:
case 699:
case 1589:
case 2496:
case 3954:
case 889:
case 3964:
case 2313:
case 1188:
case 828:
case 3476:
case 1276:
case 2222:
case 3204:
case 314:
case 2717:
case 4082:
case 1702:
case 1300:
case 3800:
case 1005:
case 1748:
case 1933:
case 817:
case 284:
case 2259:
case 2699:
case 3152:
case 2100:
case 3526:
case 1746:
case 3603:
case 3162:
case 2829:
case 1861:
case 1845:
case 3361:
case 2701:
case 2068:
case 3993:
case 99:
case 1681:
case 2058:
case 3351:
case 587:
case 1851:
case 634:
case 2498:
case 2667:
case 3679:
case 3421:
case 2039:
case 2887:
case 2657:
case 1186:
case 2297:
case 4067:
case 1984:
case 1157:
case 2686:
case 430:
case 846:
case 3110:
case 2856:
case 4013:
case 721:
case 2232:
case 2577:
case 3158:
case 3643:
case 3538:
case 176:
case 1925:
case 2181:
case 18:
case 1272:
case 3472:
case 175:
case 2226:
case 2382:
case 1600:
case 919:
case 2949:
case 2492:
case 863:
case 2765:
case 292:
case 1805:
case 3711:
case 2052:
case 1598:
case 3305:
case 3597:
case 2062:
case 630:
case 2755:
case 1182:
case 1803:
case 204:
case 779:
case 1596:
case 2399:
case 2029:
case 61:
case 3431:
case 1879:
case 3522:
case 41:
case 2367:
case 3379:
case 3166:
case 1051:
case 1045:
case 1061:
case 1708:
case 1340:
case 2868:
case 2839:
case 987:
case 2087:
case 3661:
case 3645:
case 2427:
case 3881:
case 2214:
case 2228:
case 1381:
case 1491:
case 3291:
case 3651:
case 1444:
case 980:
case 735:
case 2416:
case 3446:
case 2738:
case 2945:
case 2961:
case 317:
case 1534:
case 413:
case 1809:
case 3309:
case 500:
case 742:
case 1120:
case 456:
case 1195:
case 2797:
case 511:
case 992:
case 3565:
case 3594:
case 655:
case 194:
case 2511:
case 1929:
case 613:
case 1873:
case 491:
case 2201:
case 3373:
case 219:
case 3070:
case 1875:
case 3133:
case 3375:
case 362:
case 1049:
case 139:
case 2619:
case 389:
case 3563:
case 3649:
case 328:
case 148:
case 4019:
case 2084:
case 3448:
case 757:
case 2460:
case 2424:
case 814:
case 2217:
case 5:
case 1202:
case 3247:
case 3913:
case 2485:
case 183:
case 2090:
case 2507:
case 2354:
case 1512:
case 1776:
case 3609:
case 1910:
case 801:
case 1731:
case 3957:
case 900:
case 993:
case 1958:
case 4093:
case 729:
case 2771:
case 788:
case 1939:
case 766:
case 2693:
case 580:
case 3744:
case 1518:
case 1524:
case 2714:
case 2170:
case 1560:
case 2728:
case 3673:
case 3517:
case 810:
case 3408:
case 743:
case 3999:
case 3442:
case 1242:
case 125:
case 2319:
case 504:
case 1849:
case 3349:
case 1516:
case 2434:
case 1370:
case 3870:
case 346:
case 126:
case 83:
case 3406:
case 984:
case 182:
case 309:
case 332:
case 2035:
case 2905:
case 4054:
case 2695:
case 2664:
case 1966:
case 467:
case 2620:
case 3123:
case 4020:
case 2265:
case 2654:
case 1956:
case 4064:
case 29:
case 9:
case 2825:
case 2280:
case 190:
case 103:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747620002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,];
var gg_b = "1747620002/";

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
