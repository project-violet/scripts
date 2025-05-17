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
case 138:
case 1421:
case 492:
case 2654:
case 1639:
case 1075:
case 1570:
case 2165:
case 2036:
case 3443:
case 2489:
case 3073:
case 3797:
case 3596:
case 89:
case 1146:
case 3854:
case 2408:
case 2443:
case 1619:
case 3036:
case 3408:
case 3420:
case 1839:
case 2073:
case 2314:
case 636:
case 782:
case 3334:
case 899:
case 1257:
case 3654:
case 2016:
case 460:
case 161:
case 1278:
case 3321:
case 2796:
case 183:
case 2884:
case 126:
case 416:
case 3605:
case 843:
case 2925:
case 2941:
case 3771:
case 2892:
case 3467:
case 2017:
case 3684:
case 1343:
case 1287:
case 3925:
case 1064:
case 1952:
case 1320:
case 135:
case 163:
case 3017:
case 2684:
case 2467:
case 3892:
case 3805:
case 1923:
case 2345:
case 3796:
case 1648:
case 3597:
case 2692:
case 1147:
case 2459:
case 1434:
case 2972:
case 2863:
case 1581:
case 1751:
case 3742:
case 2646:
case 1407:
case 2529:
case 1049:
case 2306:
case 272:
case 320:
case 3213:
case 1479:
case 1154:
case 3846:
case 372:
case 3580:
case 2663:
case 3529:
case 509:
case 1865:
case 3750:
case 4066:
case 1083:
case 2846:
case 2258:
case 2213:
case 220:
case 640:
case 2119:
case 3863:
case 991:
case 4089:
case 337:
case 3233:
case 4020:
case 815:
case 3368:
case 976:
case 2276:
case 1798:
case 3646:
case 2742:
case 352:
case 3729:
case 3307:
case 4067:
case 867:
case 2209:
case 2847:
case 1018:
case 313:
case 2103:
case 94:
case 956:
case 3148:
case 1244:
case 3055:
case 2542:
case 1551:
case 1192:
case 1674:
case 1105:
case 2729:
case 2550:
case 1184:
case 213:
case 573:
case 3209:
case 3847:
case 1857:
case 1317:
case 2115:
case 1886:
case 2043:
case 2473:
case 633:
case 3089:
case 1133:
case 4004:
case 3008:
case 3020:
case 87:
case 2190:
case 2254:
case 1782:
case 472:
case 2416:
case 3135:
case 110:
case 420:
case 1045:
case 2525:
case 1158:
case 2135:
case 879:
case 1337:
case 3416:
case 3115:
case 1176:
case 770:
case 1669:
case 2436:
case 2364:
case 3190:
case 2020:
case 2008:
case 3473:
case 1219:
case 3284:
case 1464:
case 2741:
case 1656:
case 688:
case 1109:
case 2067:
case 3205:
case 859:
case 1336:
case 3417:
case 1177:
case 2375:
case 2144:
case 2437:
case 1678:
case 2996:
case 1034:
case 411:
case 2292:
case 1856:
case 3375:
case 668:
case 3437:
case 1594:
case 1970:
case 1316:
case 1723:
case 3059:
case 308:
case 3996:
case 803:
case 3741:
case 123:
case 1014:
case 1373:
case 2284:
case 617:
case 452:
case 3067:
case 2205:
case 549:
case 2950:
case 3157:
case 3613:
case 2691:
case 3658:
case 2322:
case 292:
case 3186:
case 600:
case 1483:
case 3338:
case 3891:
case 2246:
case 2858:
case 3676:
case 2813:
case 445:
case 1265:
case 1951:
case 3942:
case 3353:
case 4073:
case 971:
case 380:
case 54:
case 2169:
case 2891:
case 3246:
case 556:
case 2404:
case 2942:
case 1007:
case 3633:
case 1815:
case 260:
case 2186:
case 4016:
case 2658:
case 3322:
case 3691:
case 1355:
case 3876:
case 1449:
case 1890:
case 1079:
case 1635:
case 591:
case 951:
case 1644:
case 3247:
case 3572:
case 1438:
case 2455:
case 73:
case 3980:
case 2187:
case 4017:
case 2688:
case 144:
case 1385:
case 909:
case 3877:
case 2156:
case 3929:
case 1068:
case 1304:
case 107:
case 3609:
case 1453:
case 953:
case 593:
case 2247:
case 2383:
case 2809:
case 830:
case 2888:
case 3349:
case 1422:
case 3455:
case 883:
case 2339:
case 106:
case 1814:
case 2659:
case 3867:
case 532:
case 1634:
case 3237:
case 2106:
case 1448:
case 2405:
case 1056:
case 2484:
case 217:
case 143:
case 388:
case 577:
case 2667:
case 3859:
case 3217:
case 1614:
case 3405:
case 594:
case 2562:
case 1834:
case 288:
case 2319:
case 881:
case 1403:
case 3339:
case 368:
case 2237:
case 3492:
case 2867:
case 3659:
case 3216:
case 1901:
case 3666:
case 231:
case 3179:
case 440:
case 838:
case 2303:
case 2889:
case 2912:
case 605:
case 3932:
case 1845:
case 1821:
case 3107:
case 2900:
case 3689:
case 365:
case 1069:
case 742:
case 1384:
case 265:
case 3866:
case 1305:
case 3236:
case 3900:
case 1057:
case 1621:
case 199:
case 2843:
case 2216:
case 3303:
case 3912:
case 4063:
case 997:
case 2179:
case 1439:
case 3820:
case 1346:
case 98:
case 969:
case 2088:
case 3114:
case 167:
case 2731:
case 1167:
case 1668:
case 3961:
case 2524:
case 3711:
case 428:
case 118:
case 1474:
case 2134:
case 2447:
case 3793:
case 3524:
case 2961:
case 4092:
case 2255:
case 96:
case 1926:
case 1702:
case 616:
case 187:
case 1795:
case 3009:
case 1806:
case 3365:
case 3731:
case 1960:
case 4005:
case 414:
case 124:
case 1710:
case 2285:
case 2511:
case 1143:
case 3724:
case 3076:
case 3446:
case 1927:
case 1090:
case 1502:
case 52:
case 2033:
case 2463:
case 3058:
case 4054:
case 3121:
case 3013:
case 3145:
case 3531:
case 1510:
case 660:
case 2013:
case 2058:
case 200:
case 758:
case 2531:
case 775:
case 1530:
case 1465:
case 2593:
case 3033:
case 1189:
case 1607:
case 3204:
case 2446:
case 2837:
case 3005:
case 3512:
case 4088:
case 3084:
case 2153:
case 101:
case 2532:
case 3637:
case 821:
case 3817:
case 3386:
case 3528:
case 3500:
case 3092:
case 4077:
case 2122:
case 2637:
case 328:
case 3532:
case 3259:
case 1155:
case 2528:
case 2500:
case 2092:
case 1048:
case 2386:
case 2817:
case 214:
case 574:
case 1501:
case 3267:
case 3837:
case 2369:
case 886:
case 3617:
case 3153:
case 2512:
case 4033:
case 3289:
case 3208:
case 702:
case 2387:
case 3673:
case 2243:
case 2816:
case 1185:
case 1701:
case 994:
case 1457:
case 1675:
case 2378:
case 4091:
case 2962:
case 236:
case 2712:
case 2873:
case 2836:
case 1599:
case 179:
case 3873:
case 336:
case 2616:
case 3054:
case 1245:
case 3378:
case 810:
case 719:
case 225:
case 645:
case 2289:
case 3387:
case 1875:
case 3728:
case 3700:
case 932:
case 4076:
case 1930:
case 3761:
case 3335:
case 3477:
case 2993:
case 3911:
case 1391:
case 3409:
case 2390:
case 3488:
case 1333:
case 417:
case 1117:
case 652:
case 2315:
case 929:
case 2931:
case 2855:
case 2488:
case 3390:
case 2164:
case 1995:
case 2409:
case 1822:
case 1760:
case 3855:
case 3315:
case 1910:
case 2335:
case 1137:
case 2761:
case 1902:
case 1358:
case 1853:
case 485:
case 3063:
case 2458:
case 2476:
case 2604:
case 56:
case 1136:
case 589:
case 1526:
case 2046:
case 1883:
case 3433:
case 2685:
case 1849:
case 3561:
case 465:
case 1415:
case 433:
case 637:
case 2433:
case 1490:
case 2491:
case 2804:
case 1279:
case 58:
case 2063:
case 672:
case 1116:
case 2885:
case 3344:
case 746:
case 2549:
case 1080:
case 3753:
case 397:
case 2660:
case 2295:
case 2202:
case 4023:
case 1585:
case 0:
case 933:
case 3738:
case 759:
case 2860:
case 965:
case 3626:
case 374:
case 3210:
case 1861:
case 1231:
case 1199:
case 2583:
case 3295:
case 2372:
case 2826:
case 2753:
case 297:
case 1472:
case 3538:
case 525:
case 779:
case 3100:
case 1224:
case 2907:
case 2098:
case 1042:
case 3051:
case 3627:
case 968:
case 354:
case 429:
case 119:
case 3749:
case 2783:
case 2827:
case 870:
case 917:
case 2518:
case 3112:
case 1101:
case 2749:
case 1050:
case 254:
case 102:
case 2112:
case 3518:
case 536:
case 3783:
case 3132:
case 1704:
case 2051:
case 1555:
case 3098:
case 2627:
case 2128:
case 2100:
case 2899:
case 2070:
case 1737:
case 1536:
case 2161:
case 696:
case 1126:
case 3934:
case 1425:
case 3452:
case 3699:
case 2914:
case 1160:
case 730:
case 3914:
case 477:
case 2699:
case 900:
case 784:
case 3764:
case 2452:
case 3575:
case 1394:
case 1717:
case 1516:
case 432:
case 3440:
case 198:
case 1382:
case 1573:
case 653:
case 2482:
case 2945:
case 2921:
case 1828:
case 3775:
case 1716:
case 1323:
case 389:
case 1632:
case 2801:
case 1920:
case 1908:
case 1097:
case 3341:
case 195:
case 1773:
case 1989:
case 1537:
case 2341:
case 1628:
case 651:
case 1832:
case 3945:
case 1262:
case 369:
case 38:
case 3482:
case 609:
case 2775:
case 2226:
case 2938:
case 3630:
case 332:
case 3507:
case 2602:
case 1261:
case 4070:
case 1955:
case 1831:
case 2830:
case 1398:
case 294:
case 1893:
case 3918:
case 377:
case 2610:
case 3953:
case 3579:
case 3802:
case 936:
case 1480:
case 706:
case 3695:
case 3260:
case 1429:
case 1631:
case 2953:
case 2918:
case 1693:
case 925:
case 3938:
case 2922:
case 2350:
case 2706:
case 2507:
case 743:
case 2481:
case 2810:
case 232:
case 1450:
case 890:
case 2779:
case 2568:
case 48:
case 469:
case 799:
case 533:
case 3227:
case 882:
case 3498:
case 2506:
case 2329:
case 2227:
case 1072:
case 1904:
case 1985:
case 489:
case 3380:
case 46:
case 3506:
case 3707:
case 1442:
case 3451:
case 2498:
case 79:
case 2949:
case 914:
case 1824:
case 1:
case 357:
case 862:
case 3983:
case 3779:
case 1195:
case 2397:
case 3545:
case 2714:
case 474:
case 3131:
case 1937:
case 3470:
case 3193:
case 4081:
case 2111:
case 1543:
case 724:
case 3734:
case 3040:
case 3023:
case 3111:
case 2470:
case 178:
case 1508:
case 1520:
case 2040:
case 767:
case 155:
case 497:
case 2521:
case 1025:
case 3964:
case 3052:
case 2545:
case 1041:
case 1767:
case 1566:
case 2299:
case 1917:
case 2371:
case 1720:
case 2534:
case 1559:
case 1862:
case 175:
case 3514:
case 3082:
case 2721:
case 2745:
case 500:
case 1567:
case 3975:
case 715:
case 229:
case 3745:
case 1212:
case 454:
case 329:
case 2201:
case 1228:
case 1200:
case 3371:
case 2094:
case 22:
case 64:
case 656:
case 3534:
case 1360:
case 3251:
case 3965:
case 1024:
case 3715:
case 2427:
case 451:
case 1758:
case 170:
case 1963:
case 409:
case 2361:
case 819:
case 1182:
case 453:
case 3361:
case 802:
case 3735:
case 122:
case 2715:
case 3544:
case 2965:
case 1672:
case 1946:
case 2790:
case 1733:
case 473:
case 1591:
case 2095:
case 3141:
case 1152:
case 3125:
case 3460:
case 3535:
case 1280:
case 723:
case 3030:
case 786:
case 945:
case 3426:
case 1947:
case 2974:
case 2590:
case 1777:
case 2744:
case 2030:
case 3281:
case 496:
case 1140:
case 2426:
case 2141:
case 1327:
case 1788:
case 150:
case 3010:
case 721:
case 2460:
case 2535:
case 2401:
case 2757:
case 560:
case 3682:
case 1412:
case 3939:
case 2769:
case 1297:
case 895:
case 3694:
case 256:
case 911:
case 24:
case 62:
case 2882:
case 1428:
case 3882:
case 356:
case 4027:
case 1432:
case 3769:
case 249:
case 3757:
case 3894:
case 3401:
case 913:
case 1062:
case 3312:
case 376:
case 391:
case 3778:
case 3852:
case 3569:
case 1992:
case 2270:
case 3823:
case 3787:
case 1271:
case 3328:
case 972:
case 3756:
case 2499:
case 4060:
case 293:
case 1984:
case 3499:
case 2557:
case 2328:
case 1641:
case 2586:
case 2569:
case 291:
case 744:
case 2903:
case 276:
case 2312:
case 3623:
case 898:
case 3270:
case 1301:
case 3948:
case 1958:
case 1302:
case 1913:
case 1763:
case 3393:
case 2851:
case 2935:
case 842:
case 1850:
case 1310:
case 182:
case 44:
case 1642:
case 3651:
case 1395:
case 3027:
case 3574:
case 2197:
case 2915:
case 2574:
case 545:
case 3698:
case 1746:
case 2651:
case 2027:
case 1933:
case 162:
case 1650:
case 2898:
case 1842:
case 1330:
case 449:
case 1493:
case 1061:
case 2565:
case 3944:
case 3402:
case 3196:
case 763:
case 2026:
case 2681:
case 548:
case 697:
case 493:
case 3495:
case 1431:
case 2171:
case 3881:
case 2495:
case 1563:
case 1988:
case 2410:
case 674:
case 3171:
case 3324:
case 3565:
case 1829:
case 2944:
case 1977:
case 1411:
case 3774:
case 251:
case 1032:
case 916:
case 2969:
case 858:
case 2503:
case 66:
case 3548:
case 1697:
case 1198:
case 2142:
case 3150:
case 3001:
case 312:
case 2986:
case 209:
case 520:
case 3986:
case 309:
case 1505:
case 2150:
case 1897:
case 1012:
case 253:
case 68:
case 20:
case 3719:
case 351:
case 2294:
case 2548:
case 3987:
case 4010:
case 3870:
case 1705:
case 3956:
case 513:
case 2252:
case 1896:
case 1671:
case 2539:
case 1554:
case 4095:
case 1784:
case 396:
case 3703:
case 3240:
case 371:
case 3362:
case 2670:
case 747:
case 1792:
case 2223:
case 1181:
case 271:
case 2362:
case 2978:
case 878:
case 511:
case 2703:
case 1696:
case 3129:
case 960:
case 2099:
case 2870:
case 3180:
case 3398:
case 2811:
case 1918:
case 2631:
case 1579:
case 1768:
case 498:
case 3611:
case 1481:
case 132:
case 1350:
case 1706:
case 3261:
case 1922:
case 2611:
case 2955:
case 1602:
case 2261:
case 3811:
case 194:
case 1260:
case 3429:
case 650:
case 59:
case 95:
case 2072:
case 2904:
case 2442:
case 1498:
case 731:
case 2985:
case 3381:
case 1949:
case 2:
case 733:
case 622:
case 3:
case 1983:
case 1779:
case 1568:
case 3072:
case 495:
case 3985:
case 1329:
case 1451:
case 2130:
case 3937:
case 518:
case 255:
case 871:
case 2589:
case 2520:
case 2508:
case 1734:
case 1040:
case 3496:
case 278:
case 2025:
case 1521:
case 1545:
case 2917:
case 2566:
case 2767:
case 567:
case 1714:
case 1964:
case 3025:
case 873:
case 2195:
case 524:
case 3767:
case 3566:
case 4080:
case 2110:
case 1023:
case 1111:
case 3130:
case 2937:
case 2496:
case 587:
case 3759:
case 3589:
case 1514:
case 964:
case 853:
case 1201:
case 3567:
case 3766:
case 3370:
case 4050:
case 1975:
case 3916:
case 402:
case 2743:
case 1094:
case 2200:
case 2936:
case 2497:
case 358:
case 80:
case 930:
case 3720:
case 3708:
case 41:
case 12:
case 375:
case 3228:
case 3200:
case 984:
case 1124:
case 1371:
case 3936:
case 4042:
case 2973:
case 2789:
case 2559:
case 2862:
case 2232:
case 515:
case 3212:
case 809:
case 2370:
case 2567:
case 3662:
case 478:
case 501:
case 3211:
case 3755:
case 999:
case 3029:
case 559:
case 3080:
case 1753:
case 197:
case 1718:
case 4025:
case 1372:
case 1826:
case 174:
case 1738:
case 2504:
case 1202:
case 2585:
case 2211:
case 202:
case 1749:
case 2101:
case 2704:
case 1538:
case 1128:
case 1100:
case 736:
case 3042:
case 1627:
case 2785:
case 458:
case 906:
case 3704:
case 475:
case 3555:
case 2224:
case 725:
case 219:
case 1553:
case 1518:
case 1783:
case 943:
case 3425:
case 1452:
case 1699:
case 2516:
case 2967:
case 891:
case 2382:
case 298:
case 876:
case 915:
case 3126:
case 2959:
case 2737:
case 1070:
case 3959:
case 1440:
case 3096:
case 3573:
case 564:
case 2425:
case 2441:
case 2071:
case 2160:
case 189:
case 16:
case 3632:
case 2127:
case 3908:
case 3920:
case 1325:
case 987:
case 1341:
case 3773:
case 3812:
case 4:
case 2262:
case 1601:
case 2340:
case 2832:
case 924:
case 3966:
case 2612:
case 3517:
case 3323:
case 3832:
case 3340:
case 18:
case 2323:
case 2517:
case 2716:
case 2828:
case 2800:
case 3736:
case 2632:
case 3943:
case 2812:
case 3600:
case 3628:
case 2908:
case 2920:
case 3976:
case 1331:
case 3310:
case 382:
case 2547:
case 2746:
case 1651:
case 3642:
case 3395:
case 1027:
case 2272:
case 1990:
case 2991:
case 3958:
case 923:
case 4062:
case 3302:
case 986:
case 538:
case 1393:
case 2330:
case 1898:
case 2842:
case 362:
case 290:
case 3650:
case 2302:
case 1851:
case 3842:
case 3330:
case 1311:
case 282:
case 966:
case 1698:
case 3547:
case 3746:
case 3933:
case 921:
case 61:
case 2563:
case 3680:
case 3629:
case 2909:
case 877:
case 1410:
case 2880:
case 2411:
case 832:
case 3170:
case 3061:
case 2829:
case 3747:
case 526:
case 2061:
case 3829:
case 2170:
case 3977:
case 3411:
case 1681:
case 1774:
case 2629:
case 581:
case 3988:
case 748:
case 1171:
case 563:
case 894:
case 2431:
case 1150:
case 737:
case 2505:
case 112:
case 1282:
case 2584:
case 2012:
case 1739:
case 2754:
case 695:
case 1548:
case 2151:
case 1503:
case 2032:
case 2198:
case 3151:
case 1142:
case 3592:
case 3028:
case 4024:
case 1986:
case 3505:
case 944:
case 907:
case 3754:
case 470:
case 171:
case 1362:
case 3792:
case 2871:
case 4093:
case 711:
case 1099:
case 3896:
case 2225:
case 3671:
case 3784:
case 450:
case 1129:
case 1180:
case 2784:
case 547:
case 2554:
case 2896:
case 1252:
case 2671:
case 752:
case 2181:
case 4011:
case 1223:
case 2792:
case 1748:
case 3871:
case 3713:
case 3509:
case 3758:
case 2791:
case 4012:
case 3588:
case 2182:
case 3963:
case 981:
case 854:
case 2672:
case 3360:
case 3776:
case 3242:
case 3024:
case 1965:
case 1790:
case 2946:
case 1544:
case 2776:
case 1298:
case 983:
case 3946:
case 1427:
case 926:
case 270:
case 2963:
case 2872:
case 2326:
case 2758:
case 510:
case 705:
case 3250:
case 322:
case 2093:
case 3123:
case 1744:
case 2461:
case 2140:
case 3947:
case 1426:
case 521:
case 3533:
case 2709:
case 2327:
case 1125:
case 2152:
case 523:
case 3709:
case 1095:
case 3327:
case 350:
case 3031:
case 2229:
case 3461:
case 3093:
case 2533:
case 1002:
case 1974:
case 2947:
case 658:
case 2432:
case 3297:
case 1694:
case 792:
case 2399:
case 889:
case 3400:
case 780:
case 3412:
case 947:
case 2954:
case 1939:
case 2062:
case 1587:
case 1786:
case 1556:
case 1894:
case 1401:
case 3954:
case 734:
case 869:
case 88:
case 2412:
case 14:
case 3432:
case 760:
case 2297:
case 2428:
case 3399:
case 1586:
case 1756:
case 2641:
case 507:
case 3984:
case 1312:
case 1569:
case 3841:
case 1640:
case 339:
case 2825:
case 2841:
case 3296:
case 1270:
case 3301:
case 2992:
case 2905:
case 3625:
case 3641:
case 33:
case 193:
case 1332:
case 1840:
case 2045:
case 1525:
case 3782:
case 2475:
case 2337:
case 3857:
case 3317:
case 3886:
case 3523:
case 1008:
case 1997:
case 825:
case 1115:
case 2886:
case 1043:
case 2523:
case 2317:
case 2794:
case 3669:
case 2857:
case 3540:
case 2782:
case 310:
case 3113:
case 3657:
case 2239:
case 3158:
case 836:
case 3475:
case 3337:
case 699:
case 2887:
case 366:
case 3177:
case 2856:
case 2248:
case 321:
case 3034:
case 3203:
case 286:
case 2373:
case 2014:
case 3656:
case 2752:
case 3464:
case 2878:
case 3336:
case 1971:
case 1417:
case 404:
case 1741:
case 550:
case 3878:
case 2687:
case 3373:
case 3582:
case 323:
case 386:
case 4053:
case 1375:
case 982:
case 2678:
case 3594:
case 3887:
case 2203:
case 2740:
case 641:
case 108:
case 1996:
case 1891:
case 1676:
case 1169:
case 3615:
case 1485:
case 134:
case 3265:
case 3690:
case 2007:
case 1942:
case 1613:
case 1157:
case 2449:
case 1658:
case 756:
case 160:
case 2635:
case 3483:
case 1338:
case 3815:
case 1691:
case 1322:
case 4075:
case 1950:
case 3449:
case 3890:
case 3635:
case 1353:
case 615:
case 2615:
case 749:
case 1813:
case 1772:
case 3998:
case 2690:
case 1980:
case 463:
case 667:
case 3385:
case 1877:
case 2844:
case 1929:
case 307:
case 2418:
case 618:
case 539:
case 2981:
case 2438:
case 1178:
case 483:
case 3981:
case 2006:
case 461:
case 3422:
case 1455:
case 3844:
case 776:
case 791:
case 624:
case 244:
case 1187:
case 3418:
case 207:
case 3453:
case 2304:
case 53:
case 3994:
case 3367:
case 582:
case 865:
case 1073:
case 2269:
case 1797:
case 2839:
case 338:
case 4079:
case 3359:
case 950:
case 2286:
case 3639:
case 2819:
case 2982:
case 1334:
case 562:
case 2421:
case 2075:
case 1571:
case 3257:
case 679:
case 1165:
case 2367:
case 2994:
case 2146:
case 1408:
case 3269:
case 3414:
case 2308:
case 2064:
case 2952:
case 1771:
case 3256:
case 922:
case 3343:
case 263:
case 2923:
case 1037:
case 1459:
case 1345:
case 3278:
case 148:
case 1174:
case 2648:
case 383:
case 326:
case 261:
case 3366:
case 1805:
case 3923:
case 868:
case 2603:
case 1884:
case 2278:
case 1796:
case 3147:
case 2940:
case 3064:
case 1925:
case 1941:
case 817:
case 3320:
case 3308:
case 3389:
case 3803:
case 407:
case 335:
case 2414:
case 2287:
case 2256:
case 2235:
case 3049:
case 410:
case 4045:
case 800:
case 4021:
case 3479:
case 2083:
case 3154:
case 93:
case 1258:
case 709:
case 3290:
case 1119:
case 3215:
case 1276:
case 2798:
case 1742:
case 3407:
case 1863:
case 1233:
case 137:
case 1972:
case 712:
case 2290:
case 753:
case 2751:
case 939:
case 3798:
case 1085:
case 2581:
case 2215:
case 1306:
case 3235:
case 1139:
case 1291:
case 2154:
case 2038:
case 1379:
case 3244:
case 1148:
case 2406:
case 2551:
case 1055:
case 1647:
case 2781:
case 1550:
case 1307:
case 2468:
case 113:
case 4014:
case 486:
case 247:
case 3053:
case 2184:
case 304:
case 2018:
case 3468:
case 2874:
case 3038:
case 421:
case 630:
case 3781:
case 1277:
case 2598:
case 2244:
case 3406:
case 3674:
case 1138:
case 301:
case 3234:
case 3864:
case 1637:
case 626:
case 3003:
case 487:
case 1386:
case 1357:
case 1500:
case 661:
case 1005:
case 114:
case 424:
case 2487:
case 359:
case 203:
case 1084:
case 1512:
case 663:
case 467:
case 3501:
case 3664:
case 1153:
case 3214:
case 635:
case 2003:
case 808:
case 418:
case 3155:
case 1266:
case 3457:
case 1836:
case 3675:
case 2221:
case 3039:
case 1289:
case 3469:
case 1732:
case 805:
case 1208:
case 1220:
case 3104:
case 2875:
case 3185:
case 2104:
case 4090:
case 2469:
case 1636:
case 51:
case 1816:
case 2185:
case 1387:
case 1356:
case 3875:
case 2701:
case 3599:
case 379:
case 1873:
case 1962:
case 2039:
case 2675:
case 3221:
case 1409:
case 3838:
case 1488:
case 3117:
case 3653:
case 2822:
case 2376:
case 3206:
case 2444:
case 1761:
case 1335:
case 2638:
case 384:
case 3391:
case 2726:
case 441:
case 3622:
case 1655:
case 2902:
case 2313:
case 3137:
case 3313:
case 3074:
case 4078:
case 3726:
case 2391:
case 3527:
case 958:
case 3818:
case 598:
case 330:
case 227:
case 1390:
case 2268:
case 3376:
case 4056:
case 2618:
case 604:
case 2117:
case 3136:
case 769:
case 2849:
case 3526:
case 978:
case 3388:
case 3435:
case 2683:
case 3377:
case 860:
case 4086:
case 499:
case 1458:
case 3279:
case 2649:
case 1344:
case 2435:
case 892:
case 2377:
case 2560:
case 2065:
case 1561:
case 1476:
case 1604:
case 3415:
case 49:
case 2526:
case 2883:
case 1046:
case 3490:
case 880:
case 3056:
case 3087:
case 2264:
case 1859:
case 2834:
case 3078:
case 4074:
case 621:
case 91:
case 794:
case 306:
case 2403:
case 430:
case 666:
case 3448:
case 3403:
case 2354:
case 341:
case 2078:
case 168:
case 1106:
case 2448:
case 1659:
case 2056:
case 2999:
case 919:
case 732:
case 1168:
case 623:
case 243:
case 1484:
case 117:
case 686:
case 3419:
case 39:
case 133:
case 1273:
case 2069:
case 1932:
case 3821:
case 1107:
case 757:
case 2305:
case 1608:
case 1620:
case 165:
case 1216:
case 1843:
case 2057:
case 2392:
case 1348:
case 3275:
case 2621:
case 542:
case 1666:
case 2275:
case 3392:
case 399:
case 1303:
case 610:
case 3069:
case 1643:
case 29:
case 2419:
case 1900:
case 4065:
case 1255:
case 3222:
case 3730:
case 1961:
case 3044:
case 4048:
case 1711:
case 287:
case 2702:
case 3606:
case 2238:
case 2926:
case 3159:
case 2795:
case 3346:
case 403:
case 2710:
case 2806:
case 2218:
case 1088:
case 3795:
case 2668:
case 1365:
case 267:
case 3710:
case 459:
case 1793:
case 2730:
case 3926:
case 1447:
case 3868:
case 555:
case 218:
case 2606:
case 3363:
case 811:
case 4003:
case 387:
case 2283:
case 1013:
case 1374:
case 3249:
case 2679:
case 2166:
case 479:
case 1593:
case 3015:
case 2530:
case 1076:
case 2108:
case 1446:
case 3090:
case 575:
case 3879:
case 215:
case 2189:
case 3530:
case 3465:
case 1511:
case 2015:
case 2143:
case 1285:
case 1033:
case 3189:
case 315:
case 2090:
case 2879:
case 2502:
case 3607:
case 3108:
case 2927:
case 2595:
case 1091:
case 3035:
case 872:
case 3166:
case 3679:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747486801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,];
var gg_b = "1747486801/";

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
