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
case 2351:
case 3511:
case 2573:
case 507:
case 978:
case 3334:
case 2747:
case 427:
case 1340:
case 2934:
case 675:
case 3722:
case 1700:
case 2580:
case 522:
case 768:
case 2768:
case 1289:
case 2838:
case 1635:
case 2539:
case 1953:
case 2788:
case 1508:
case 3795:
case 3244:
case 3189:
case 1591:
case 1269:
case 2323:
case 1230:
case 402:
case 3759:
case 898:
case 578:
case 2158:
case 3850:
case 81:
case 2473:
case 3411:
case 1018:
case 896:
case 1245:
case 48:
case 907:
case 3057:
case 205:
case 576:
case 111:
case 3634:
case 3714:
case 1182:
case 319:
case 3262:
case 3536:
case 217:
case 2065:
case 2480:
case 915:
case 69:
case 2607:
case 3802:
case 1491:
case 129:
case 1162:
case 3001:
case 2439:
case 922:
case 4084:
case 1335:
case 1203:
case 1883:
case 2142:
case 1157:
case 3434:
case 483:
case 1218:
case 58:
case 212:
case 927:
case 2719:
case 225:
case 3693:
case 3611:
case 2810:
case 1613:
case 3731:
case 2265:
case 3062:
case 2660:
case 3861:
case 756:
case 1608:
case 1779:
case 693:
case 3336:
case 2278:
case 1077:
case 2754:
case 1932:
case 2680:
case 3881:
case 902:
case 3716:
case 1540:
case 3534:
case 4066:
case 2249:
case 2184:
case 2551:
case 3311:
case 407:
case 2993:
case 2911:
case 4086:
case 3973:
case 1308:
case 502:
case 1767:
case 1971:
case 2339:
case 2523:
case 415:
case 3939:
case 885:
case 748:
case 2380:
case 2792:
case 350:
case 2507:
case 3772:
case 1796:
case 3636:
case 422:
case 1030:
case 3954:
case 1106:
case 3866:
case 3672:
case 2354:
case 3514:
case 3090:
case 1243:
case 78:
case 3206:
case 2488:
case 3143:
case 387:
case 3897:
case 289:
case 2877:
case 1648:
case 1817:
case 3559:
case 2625:
case 438:
case 2083:
case 3858:
case 2456:
case 2447:
case 344:
case 1010:
case 3616:
case 948:
case 3422:
case 1452:
case 2972:
case 2889:
case 1238:
case 2654:
case 2209:
case 198:
case 481:
case 1396:
case 3414:
case 3372:
case 2568:
case 1387:
case 1976:
case 2780:
case 3138:
case 1713:
case 727:
case 3631:
case 2588:
case 1367:
case 2760:
case 811:
case 468:
case 2325:
case 1429:
case 2619:
case 3459:
case 3925:
case 3711:
case 1633:
case 1955:
case 1552:
case 3522:
case 1912:
case 958:
case 702:
case 3316:
case 3431:
case 3975:
case 2995:
case 4050:
case 3395:
case 1479:
case 2388:
case 113:
case 2368:
case 1587:
case 2707:
case 3572:
case 370:
case 581:
case 3322:
case 3956:
case 1849:
case 1352:
case 1926:
case 334:
case 2356:
case 3516:
case 1694:
case 1740:
case 3734:
case 566:
case 1315:
case 3204:
case 3659:
case 2419:
case 2525:
case 936:
case 568:
case 1735:
case 981:
case 2675:
case 3290:
case 783:
case 3006:
case 2492:
case 2668:
case 2914:
case 778:
case 1205:
case 1878:
case 3314:
case 1496:
case 968:
case 536:
case 2020:
case 3110:
case 364:
case 2818:
case 3416:
case 1394:
case 2647:
case 1974:
case 3622:
case 456:
case 2283:
case 1210:
case 185:
case 3041:
case 1448:
case 382:
case 1533:
case 538:
case 1329:
case 2263:
case 1615:
case 3801:
case 944:
case 1161:
case 750:
case 1668:
case 649:
case 3524:
case 3170:
case 2878:
case 2205:
case 3002:
case 3898:
case 2467:
case 346:
case 2579:
case 1181:
case 554:
case 1270:
case 2865:
case 285:
case 3929:
case 1827:
case 503:
case 40:
case 1519:
case 987:
case 423:
case 3626:
case 3374:
case 52:
case 1647:
case 1656:
case 3050:
case 2652:
case 3163:
case 1803:
case 3994:
case 213:
case 3137:
case 4041:
case 3424:
case 1368:
case 659:
case 358:
case 2587:
case 1707:
case 2038:
case 1723:
case 1237:
case 1995:
case 544:
case 1375:
case 356:
case 812:
case 2315:
case 3555:
case 4006:
case 2629:
case 2433:
case 903:
case 2104:
case 3512:
case 2352:
case 2849:
case 587:
case 2926:
case 3674:
case 1347:
case 1356:
case 3326:
case 3844:
case 2791:
case 3967:
case 1830:
case 1739:
case 336:
case 1588:
case 1760:
case 2367:
case 2708:
case 1037:
case 1654:
case 1209:
case 3987:
case 3376:
case 1392:
case 1568:
case 2976:
case 1780:
case 3312:
case 3526:
case 2494:
case 90:
case 970:
case 1556:
case 3474:
case 3948:
case 817:
case 4090:
case 721:
case 2955:
case 2379:
case 3399:
case 1475:
case 1931:
case 4004:
case 534:
case 982:
case 366:
case 2667:
case 3081:
case 3979:
case 3202:
case 189:
case 669:
case 3061:
case 964:
case 1692:
case 610:
case 3676:
case 1070:
case 3862:
case 3324:
case 774:
case 1456:
case 3574:
case 2010:
case 2828:
case 3426:
case 1150:
case 1063:
case 523:
case 42:
case 2452:
case 403:
case 1220:
case 2333:
case 2141:
case 381:
case 2648:
case 2817:
case 50:
case 3655:
case 890:
case 2415:
case 1625:
case 3521:
case 4082:
case 782:
case 1373:
case 560:
case 3804:
case 3755:
case 1911:
case 3284:
case 2540:
case 1249:
case 3712:
case 1380:
case 2787:
case 679:
case 521:
case 974:
case 3776:
case 2796:
case 2030:
case 2069:
case 2971:
case 3991:
case 376:
case 3913:
case 1339:
case 2837:
case 3371:
case 2391:
case 2313:
case 3553:
case 2863:
case 450:
case 3242:
case 2045:
case 1719:
case 530:
case 1673:
case 3421:
case 1028:
case 2733:
case 2227:
case 2203:
case 2146:
case 315:
case 734:
case 112:
case 209:
case 2077:
case 1278:
case 2932:
case 307:
case 3097:
case 1936:
case 3332:
case 2613:
case 3890:
case 1660:
case 2535:
case 1639:
case 3799:
case 2608:
case 3042:
case 3841:
case 2794:
case 754:
case 105:
case 940:
case 3117:
case 2027:
case 211:
case 430:
case 2820:
case 1217:
case 550:
case 3128:
case 1085:
case 2413:
case 3653:
case 229:
case 2162:
case 3935:
case 1078:
case 1166:
case 2408:
case 1439:
case 3286:
case 2182:
case 1843:
case 1065:
case 3266:
case 3532:
case 1186:
case 1607:
case 3726:
case 950:
case 1747:
case 2752:
case 889:
case 3084:
case 1573:
case 3321:
case 419:
case 3064:
case 1049:
case 2715:
case 1560:
case 2953:
case 1539:
case 1775:
case 4057:
case 3571:
case 787:
case 3353:
case 2230:
case 1580:
case 2289:
case 2144:
case 2809:
case 421:
case 3049:
case 3573:
case 3351:
case 1084:
case 2722:
case 274:
case 1726:
case 2907:
case 390:
case 4003:
case 230:
case 3323:
case 4027:
case 1571:
case 2795:
case 3539:
case 3560:
case 2411:
case 3473:
case 2850:
case 3158:
case 1621:
case 2145:
case 1117:
case 1774:
case 1841:
case 2046:
case 836:
case 1258:
case 1042:
case 909:
case 3186:
case 3480:
case 71:
case 3197:
case 317:
case 63:
case 2177:
case 2262:
case 219:
case 3843:
case 3460:
case 2001:
case 3166:
case 1653:
case 1935:
case 1297:
case 127:
case 2802:
case 3085:
case 201:
case 856:
case 4089:
case 3028:
case 4030:
case 2257:
case 3673:
case 1058:
case 3810:
case 2693:
case 858:
case 1242:
case 2103:
case 1066:
case 3265:
case 2731:
case 3423:
case 1453:
case 1332:
case 911:
case 1086:
case 2881:
case 240:
case 2201:
case 3936:
case 3754:
case 1097:
case 713:
case 1165:
case 3805:
case 3278:
case 2082:
case 1724:
case 65:
case 2336:
case 3285:
case 1712:
case 3249:
case 529:
case 2534:
case 2716:
case 2973:
case 3164:
case 1804:
case 785:
case 3373:
case 3551:
case 1521:
case 2939:
case 3523:
case 183:
case 1908:
case 3339:
case 1913:
case 176:
case 3360:
case 2044:
case 3507:
case 663:
case 1632:
case 3380:
case 3102:
case 1862:
case 1324:
case 1676:
case 686:
case 3070:
case 2514:
case 3354:
case 3692:
case 1061:
case 3468:
case 168:
case 1732:
case 688:
case 389:
case 2897:
case 1202:
case 620:
case 2331:
case 1979:
case 2143:
case 3488:
case 1081:
case 2886:
case 166:
case 3931:
case 3475:
case 985:
case 2495:
case 3083:
case 3625:
case 41:
case 513:
case 1655:
case 1933:
case 498:
case 2919:
case 3845:
case 2422:
case 661:
case 3150:
case 1426:
case 2616:
case 244:
case 2858:
case 496:
case 138:
case 3568:
case 3392:
case 585:
case 3209:
case 3654:
case 203:
case 1624:
case 22:
case 1699:
case 136:
case 3739:
case 1109:
case 3830:
case 1771:
case 4010:
case 2711:
case 2793:
case 2925:
case 2459:
case 1355:
case 3325:
case 2316:
case 3547:
case 1474:
case 3556:
case 4005:
case 631:
case 827:
case 1312:
case 913:
case 3388:
case 2395:
case 1499:
case 3375:
case 3009:
case 1753:
case 2975:
case 3707:
case 822:
case 158:
case 1424:
case 1576:
case 3454:
case 2614:
case 91:
case 2734:
case 1952:
case 3356:
case 4043:
case 1674:
case 1512:
case 2947:
case 651:
case 2864:
case 2322:
case 1721:
case 1915:
case 807:
case 2884:
case 3525:
case 3419:
case 2204:
case 1555:
case 2105:
case 2531:
case 3270:
case 3181:
case 1599:
case 3675:
case 146:
case 1002:
case 1476:
case 2314:
case 3554:
case 67:
case 600:
case 3161:
case 3492:
case 2006:
case 1801:
case 1994:
case 2622:
case 596:
case 3803:
case 1163:
case 3656:
case 876:
case 1050:
case 2416:
case 3818:
case 2110:
case 3020:
case 1183:
case 2359:
case 3425:
case 51:
case 3959:
case 1857:
case 2898:
case 1314:
case 248:
case 2281:
case 1531:
case 1105:
case 1290:
case 3043:
case 1695:
case 3467:
case 3735:
case 2183:
case 1842:
case 684:
case 3329:
case 850:
case 2857:
case 1041:
case 2929:
case 385:
case 1622:
case 662:
case 2412:
case 2163:
case 3394:
case 164:
case 2374:
case 2626:
case 1110:
case 3300:
case 1572:
case 3587:
case 258:
case 2137:
case 801:
case 256:
case 3479:
case 2753:
case 4020:
case 123:
case 725:
case 2721:
case 2915:
case 3629:
case 1884:
case 1204:
case 1659:
case 2326:
case 2952:
case 1516:
case 2674:
case 134:
case 5:
case 3926:
case 632:
case 3104:
case 1947:
case 1322:
case 1864:
case 3708:
case 2699:
case 12:
case 3679:
case 3367:
case 2967:
case 2771:
case 1138:
case 2844:
case 3387:
case 3976:
case 31:
case 2996:
case 238:
case 4083:
case 3500:
case 1372:
case 1414:
case 699:
case 717:
case 2474:
case 489:
case 705:
case 3912:
case 652:
case 1004:
case 3552:
case 3633:
case 860:
case 3955:
case 1711:
case 1793:
case 819:
case 3429:
case 2948:
case 3005:
case 3999:
case 594:
case 1886:
case 874:
case 1206:
case 1495:
case 3379:
case 1736:
case 3243:
case 2676:
case 1672:
case 3687:
case 2732:
case 3452:
case 2612:
case 642:
case 1422:
case 3828:
case 2426:
case 144:
case 2574:
case 2933:
case 1559:
case 281:
case 3333:
case 1919:
case 830:
case 1973:
case 2712:
case 1534:
case 1716:
case 3069:
case 4028:
case 1044:
case 3796:
case 2776:
case 1772:
case 150:
case 882:
case 1939:
case 2553:
case 3391:
case 1960:
case 2371:
case 283:
case 3089:
case 2908:
case 3837:
case 2991:
case 3435:
case 3767:
case 864:
case 3308:
case 505:
case 1118:
case 80:
case 222:
case 2058:
case 1257:
case 1246:
case 1693:
case 3045:
case 2242:
case 3863:
case 101:
case 3218:
case 1127:
case 3146:
case 794:
case 3203:
case 2086:
case 2097:
case 207:
case 309:
case 2724:
case 1336:
case 3779:
case 1861:
case 1062:
case 1731:
case 2890:
case 2185:
case 3691:
case 2671:
case 3870:
case 1634:
case 311:
case 2117:
case 2774:
case 3794:
case 1046:
case 3245:
case 1493:
case 1411:
case 121:
case 1850:
case 3820:
case 490:
case 2621:
case 1145:
case 3729:
case 1759:
case 2286:
case 854:
case 1001:
case 925:
case 2935:
case 3277:
case 3162:
case 329:
case 628:
case 1802:
case 227:
case 3413:
case 680:
case 1282:
case 912:
case 4049:
case 2532:
case 2266:
case 1262:
case 1177:
case 1536:
case 3182:
case 626:
case 1722:
case 2940:
case 887:
case 672:
case 4078:
case 3340:
case 1334:
case 2726:
case 2064:
case 4065:
case 2321:
case 1593:
case 3230:
case 3269:
case 3591:
case 2571:
case 1923:
case 3635:
case 844:
case 3953:
case 1130:
case 3144:
case 3700:
case 130:
case 3637:
case 650:
case 1024:
case 1502:
case 749:
case 2390:
case 4048:
case 24:
case 2506:
case 2970:
case 1786:
case 884:
case 3990:
case 3409:
case 1381:
case 1766:
case 862:
case 4087:
case 847:
case 3383:
case 1758:
case 2259:
case 2194:
case 3520:
case 3717:
case 271:
case 3288:
case 108:
case 3092:
case 3275:
case 2937:
case 3808:
case 2406:
case 393:
case 2072:
case 3670:
case 2690:
case 1402:
case 3891:
case 3813:
case 640:
case 233:
case 832:
case 1188:
case 3268:
case 1175:
case 3509:
case 1226:
case 3256:
case 3247:
case 1055:
case 3683:
case 3126:
case 1450:
case 3904:
case 1156:
case 1147:
case 601:
case 3663:
case 2304:
case 4079:
case 792:
case 1012:
case 128:
case 1481:
case 180:
case 2095:
case 1938:
case 4094:
case 318:
case 2606:
case 23:
case 126:
case 797:
case 4029:
case 3176:
case 253:
case 660:
case 2853:
case 3470:
case 3620:
case 1650:
case 1255:
case 2504:
case 3463:
case 3225:
case 3112:
case 1784:
case 2216:
case 837:
case 621:
case 3155:
case 3749:
case 1224:
case 3785:
case 3609:
case 3254:
case 2798:
case 842:
case 4052:
case 3199:
case 1581:
case 2179:
case 2590:
case 243:
case 1154:
case 630:
case 3765:
case 3906:
case 3437:
case 1561:
case 710:
case 2306:
case 1299:
case 674:
case 3219:
case 1742:
case 2746:
case 2757:
case 1074:
case 3320:
case 172:
case 3941:
case 3583:
case 1119:
case 2133:
case 539:
case 3349:
case 682:
case 1364:
case 877:
case 2949:
case 2826:
case 1021:
case 3428:
case 184:
case 3051:
case 459:
case 1384:
case 3815:
case 3417:
case 2657:
case 910:
case 2544:
case 1271:
case 147:
case 3665:
case 1486:
case 3260:
case 3239:
case 3007:
case 200:
case 1895:
case 3685:
case 2191:
case 1053:
case 3678:
case 1139:
case 3800:
case 1558:
case 2741:
case 808:
case 1903:
case 1918:
case 569:
case 997:
case 132:
case 3720:
case 335:
case 2346:
case 1342:
case 1859:
case 3829:
case 295:
case 3946:
case 634:
case 3132:
case 1586:
case 3365:
case 1597:
case 157:
case 1702:
case 1232:
case 3998:
case 3901:
case 3385:
case 2236:
case 4013:
case 4091:
case 231:
case 3317:
case 2557:
case 3833:
case 152:
case 391:
case 2917:
case 654:
case 1358:
case 469:
case 2928:
case 3449:
case 549:
case 3783:
case 1464:
case 410:
case 3962:
case 1781:
case 2362:
case 3585:
case 2598:
case 199:
case 1977:
case 1386:
case 3982:
case 2899:
case 2790:
case 992:
case 1831:
case 2855:
case 1442:
case 2704:
case 1584:
case 142:
case 2140:
case 2446:
case 3251:
case 261:
case 345:
case 1564:
case 559:
case 3073:
case 439:
case 3896:
case 1123:
case 2662:
case 3485:
case 288:
case 3039:
case 1872:
case 2401:
case 273:
case 3465:
case 3223:
case 2344:
case 1697:
case 1930:
case 1107:
case 3944:
case 1686:
case 2564:
case 681:
case 843:
case 3403:
case 3645:
case 3240:
case 1093:
case 86:
case 1234:
case 2442:
case 1704:
case 3427:
case 1140:
case 3134:
case 161:
case 1446:
case 775:
case 3330:
case 267:
case 2697:
case 668:
case 965:
case 2969:
case 2930:
case 2107:
case 186:
case 2686:
case 3091:
case 1876:
case 2071:
case 666:
case 1662:
case 491:
case 188:
case 2666:
case 2872:
case 120:
case 2989:
case 3892:
case 535:
case 3008:
case 2358:
case 3345:
case 1928:
case 853:
case 2464:
case 4080:
case 131:
case 1546:
case 1557:
case 252:
case 3997:
case 2032:
case 2386:
case 718:
case 1644:
case 237:
case 4073:
case 2397:
case 3377:
case 79:
case 1382:
case 3669:
case 2831:
case 3630:
case 1501:
case 716:
case 565:
case 804:
case 1824:
case 3689:
case 3854:
case 636:
case 3966:
case 232:
case 3942:
case 3327:
case 151:
case 1346:
case 1357:
case 2750:
case 2859:
case 392:
case 2342:
case 2927:
case 195:
case 3318:
case 1741:
case 2903:
case 2918:
case 3303:
case 833:
case 2566:
case 2232:
case 1985:
case 545:
case 656:
case 793:
case 2586:
case 1582:
case 3469:
case 257:
case 2702:
case 3577:
case 658:
case 4051:
case 359:
case 2384:
case 1293:
case 1211:
case 1657:
case 1034:
case 863:
case 3445:
case 2822:
case 2364:
case 2173:
case 1949:
case 3193:
case 1826:
case 3964:
case 284:
case 3847:
case 2458:
case 3738:
case 1191:
case 1113:
case 591:
case 646:
case 1698:
case 1601:
case 2139:
case 555:
case 871:
case 3477:
case 1544:
case 648:
case 3291:
case 3213:
case 3569:
case 2486:
case 3875:
case 17:
case 3208:
case 100:
case 2895:
case 2302:
case 1014:
case 1231:
case 2561:
case 2299:
case 16:
case 2224:
case 68:
case 3131:
case 4047:
case 3343:
case 1701:
case 861:
case 1179:
case 2943:
case 3703:
case 873:
case 1059:
case 2119:
case 49:
case 593:
case 1341:
case 3718:
case 1133:
case 4088:
case 416:
case 4075:
case 1404:
case 745:
case 1746:
case 3094:
case 2350:
case 2074:
case 820:
case 3727:
case 272:
case 1187:
case 1606:
case 3000:
case 2461:
case 153:
case 3823:
case 2602:
case 1853:
case 1909:
case 831:
case 2481:
case 3287:
case 280:
case 1272:
case 1167:
case 3296:
case 3405:
case 3643:
case 475:
case 3338:
case 1641:
case 2834:
case 2764:
case 2212:
case 1821:
case 3116:
case 2650:
case 993:
case 3410:
case 104:
case 755:
case 602:
case 1504:
case 2255:
case 3052:
case 791:
case 2784:
case 575:
case 851:
case 3067:
case 2175:
case 206:
case 3538:
case 3605:
case 3087:
case 3860:
case 208:
case 3839:
case 1937:
case 15:
case 1295:
case 4019:
case 3096:
case 2402:
case 3730:
case 3610:
case 2893:
case 1016:
case 2450:
case 2156:
case 2147:
case 99:
case 1152:
case 1304:
case 3215:
case 3122:
case 2012:
case 2226:
case 124:
case 3048:
case 916:
case 4054:
case 2055:
case 1115:
case 3543:
case 2836:
case 1031:
case 3438:
case 1762:
case 2766:
case 2381:
case 841:
case 2099:
case 683:
case 3079:
case 2024:
case 3114:
case 163:
case 379:
case 678:
case 2502:
case 3961:
case 277:
case 14:
case 975:
case 2786:
case 2361:
case 4025:
case 1259:
case 3229:
case 2910:
case 2550:
case 3310:
case 765:
case 171:
case 3159:
case 4092:
case 2274:
case 3294:
case 87:
case 800:
case 3033:
case 972:
case 2990:
case 3506:
case 2054:
case 3390:
case 179:
case 747:
case 363:
case 2637:
case 1079:
case 1438:
case 3031:
case 1981:
case 1305:
case 1033:
case 3983:
case 784:
case 1294:
case 4076:
case 3541:
case 849:
case 3963:
case 762:
case 528:
case 2520:
case 3194:
case 2363:
case 1229:
case 3259:
case 3604:
case 333:
case 1730:
case 2337:
case 1096:
case 3744:
case 3690:
case 757:
case 3406:
case 2808:
case 2275:
case 1839:
case 2288:
case 1605:
case 1443:
case 1880:
case 1067:
case 3115:
case 2683:
case 1252:
case 1048:
case 477:
case 2247:
case 2256:
case 324:
case 980:
case 1215:
case 732:
case 2904:
case 1873:
case 2126:
case 472:
case 1405:
case 1296:
case 2075:
case 3272:
case 1287:
case 3909:
case 3853:
case 3490:
case 353:
case 2068:
case 799:
case 33:
case 3606:
case 218:
case 2225:
case 2463:
case 3504:
case 1248:
case 2047:
case 1851:
case 1116:
case 2620:
case 2749:
case 1015:
case 577:
case 2155:
case 839:
case 3148:
case 906:
case 3216:
case 3179:
case 3701:
case 1343:
case 2778:
case 1131:
case 3798:
case 2254:
case 1638:
case 3306:
case 1279:
case 2835:
case 1902:
case 2437:
case 3231:
case 2124:
case 2570:
case 1233:
case 506:
case 1727:
case 275:
case 1094:
case 1510:
case 977:
case 3404:
case 3920:
case 2563:
case 428:
case 1950:
case 3133:
case 1718:
case 3341:
case 508:
case 2583:
case 3059:
case 1703:
case 1847:
case 1856:
case 1618:
case 1111:
case 3826:
case 879:
case 537:
case 1603:
case 1445:
case 2852:
case 1040:
case 3657:
case 3646:
case 3211:
case 1984:
case 3293:
case 265:
case 2815:
case 2239:
case 942:
case 1569:
case 777:
case 149:
case 3544:
case 552:
case 2280:
case 1868:
case 2800:
case 3601:
case 2709:
case 2678:
case 2171:
case 3113:
case 1589:
case 1738:
case 1303:
case 2894:
case 3741:
case 3874:
case 1318:
case 395:
case 2829:
case 937:
case 3357:
case 4053:
case 351:
case 235:
case 3444:
case 1136:
case 484:
case 3582:
case 1430:
case 2132:
case 3965:
case 1489:
case 3236:
case 2385:
case 2901:
case 3562:
case 1743:
case 3301:
case 3985:
case 542:
case 3978:
case 706:
case 957:
case 2763:
case 2317:
case 255:
case 1503:
case 547:
case 2585:
case 728:
case 2962:
case 3501:
case 3036:
case 2565:
case 1377:
case 139:
case 1986:
case 2770:
case 3790:
case 3899:
case 1235:
case 1997:
case 932:
case 245:
case 2617:
case 1134:
case 3446:
case 2848:
case 3457:
case 772:
case 1427:
case 3234:
case 2628:
case 3093:
case 2121:
case 1240:
case 2073:
case 2549:
case 1645:
case 499:
case 4032:
case 2207:
case 1892:
case 1008:
case 3401:
case 984:
case 6:
case 388:
case 2485:
case 452:
case 2153:
case 110:
case 2944:
case 962:
case 386:
case 1677:
case 3344:
case 2223:
case 2465:
case 373:
case 1369:
case 3151:
case 1628:
case 2418:
case 3816:
case 1549:
case 1617:
case 145:
case 97:
case 1251:
case 2427:
case 3442:
case 1080:
case 1867:
case 3107:
case 1944:
case 3930:
case 3969:
case 269:
case 3253:
case 3697:
case 743:
case 1737:
case 2330:
case 1223:
case 1207:
case 551:
case 2892:
case 1060:
case 875:
case 1485:
case 595:
case 1153:
case 3071:
case 1896:
case 3123:
case 3464:
case 486:
case 1783:
case 2345:
case 57:
case 3358:
case 500:
case 1328:
case 420:
case 2819:
case 488:
case 191:
case 2527:
case 1833:
case 352:
case 1317:
case 704:
case 995:
case 753:
case 61:
case 2377:
case 239:
case 4011:
case 3397:
case 73:
case 1879:
case 3977:
case 3761:
case 698:
case 2235:
case 2705:
case 2854:
case 2689:
case 1585:
case 3781:
case 696:
case 1957:
case 1829:
case 292:
case 1517:
case 135:
case 2327:
case 588:
case 332:
case 400:
case 1649:
case 2545:
case 47:
case 3664:
case 3903:
case 1894:
case 724:
case 3558:
case 2489:
case 441:
case 1378:
case 2743:
case 561:
case 3566:
case 2035:
case 2136:
case 259:
case 2577:
case 3702:
case 357:
case 2430:
case 733:
case 1365:
case 613:
case 3586:
case 75:
case 931:
case 2627:
case 1273:
case 2040:
case 1417:
case 771:
case 2984:
case 165:
case 3642:
case 1815:
case 973:
case 2856:
case 3458:
case 384:
case 920:
case 2111:
case 3021:
case 685:
case 1852:
case 2868:
case 3466:
case 531:
case 3139:
case 1709:
case 451:
case 1023:
case 2589:
case 3895:
case 2208:
case 1007:
case 2888:
case 3486:
case 1665:
case 763:
case 2213:
case 347:
case 3497:
case 2477:
case 3271:
case 971:
case 2279:
case 786:
case 3561:
case 2902:
case 3154:
case 1765:
case 1906:
case 3302:
case 4022:
case 3943:
case 788:
case 1199:
case 720:
case 404:
case 2505:
case 2131:
case 1609:
case 3224:
case 2718:
case 55:
case 453:
case 3119:
case 1583:
case 1941:
case 43:
case 2703:
case 372:
case 3074:
case 2510:
case 3742:
case 1219:
case 963:
case 2950:
case 1470:
case 3602:
case 19:
case 1537:
case 1176:
case 2172:
case 1068:
case 3461:
case 118:
case 2000:
case 2338:
case 2643:
case 2405:
case 891:
case 1309:
case 2807:
case 3938:
case 571:
case 380:
case 2287:
case 629:
case 46:
case 1749:
case 3212:
case 563:
case 54:
case 1463:
case 3255:
case 731:
case 2851:
case 1047:
case 3650:
case 2116:
case 1509:
case 2443:
case 2605:
case 2538:
case 2880:
case 2067:
case 1268:
case 835:
case 2200:
case 2769:
case 2730:
case 1813:
case 1670:
case 3168:
case 1092:
case 609:
case 2860:
case 2087:
case 1288:
case 1663:
case 1420:
case 4031:
case 3156:
case 751:
case 3450:
case 3811:
case 1126:
case 3893:
case 2610:
case 543:
case 3055:
case 44:
case 2252:
case 1256:
case 56:
case 3226:
case 2079:
case 504:
case 3381:
case 865:
case 3905:
case 2438:
case 4016:
case 2981:
case 1990:
case 3361:
case 77:
case 700:
case 377:
case 1054:
case 1370:
case 2961:
case 279:
case 3024:
case 2310:
case 3550:
case 741:
case 1174:
case 1520:
case 2033:
case 433:
case 2294:
case 53:
case 3274:
case 1019:
case 4072:
case 1383:
case 2159:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757606401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,];
var gg_b = "1757606401/";

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
