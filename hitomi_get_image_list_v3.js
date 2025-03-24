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
case 2179:
case 3332:
case 1116:
case 1460:
case 3367:
case 3153:
case 1518:
case 1278:
case 69:
case 4079:
case 2240:
case 2363:
case 2558:
case 2401:
case 2156:
case 613:
case 489:
case 4056:
case 2995:
case 546:
case 2636:
case 944:
case 3654:
case 501:
case 186:
case 665:
case 3493:
case 2543:
case 2328:
case 1304:
case 1073:
case 2637:
case 396:
case 2496:
case 3794:
case 3270:
case 2202:
case 133:
case 679:
case 3018:
case 514:
case 3510:
case 3149:
case 3389:
case 3772:
case 1695:
case 3862:
case 1279:
case 2426:
case 3971:
case 1936:
case 2178:
case 2833:
case 1519:
case 1814:
case 3486:
case 310:
case 2577:
case 691:
case 3213:
case 3487:
case 1962:
case 3423:
case 1937:
case 3914:
case 3573:
case 3836:
case 2217:
case 879:
case 1624:
case 2972:
case 2608:
case 3900:
case 2861:
case 2293:
case 1449:
case 1566:
case 1168:
case 508:
case 3135:
case 2785:
case 1800:
case 384:
case 2994:
case 3297:
case 2269:
case 2029:
case 3655:
case 1733:
case 461:
case 3201:
case 1346:
case 2098:
case 1347:
case 1186:
case 140:
case 1754:
case 3809:
case 1672:
case 1310:
case 2924:
case 3417:
case 3067:
case 3227:
case 1908:
case 2063:
case 3984:
case 2413:
case 1434:
case 1694:
case 287:
case 76:
case 1453:
case 951:
case 46:
case 3416:
case 1884:
case 3160:
case 865:
case 531:
case 276:
case 2609:
case 423:
case 1373:
case 1004:
case 2028:
case 2520:
case 495:
case 3402:
case 3915:
case 2470:
case 3580:
case 1169:
case 3280:
case 3356:
case 4066:
case 1607:
case 1645:
case 2060:
case 3975:
case 3199:
case 3379:
case 2353:
case 1875:
case 3357:
case 4032:
case 4067:
case 3744:
case 753:
case 3128:
case 1289:
case 3981:
case 281:
case 395:
case 957:
case 3738:
case 2188:
case 2587:
case 185:
case 1370:
case 1881:
case 3477:
case 1612:
case 2523:
case 1096:
case 2348:
case 323:
case 545:
case 3583:
case 3664:
case 1691:
case 2189:
case 3739:
case 2945:
case 2792:
case 573:
case 2907:
case 1288:
case 3129:
case 4089:
case 2711:
case 897:
case 2290:
case 2774:
case 915:
case 3458:
case 1803:
case 178:
case 2349:
case 92:
case 28:
case 1730:
case 963:
case 1621:
case 1027:
case 3443:
case 1232:
case 2991:
case 1083:
case 2912:
case 3852:
case 3378:
case 361:
case 949:
case 3596:
case 2447:
case 230:
case 2405:
case 1682:
case 820:
case 1811:
case 2517:
case 2335:
case 3706:
case 3974:
case 2277:
case 1892:
case 1158:
case 3513:
case 4018:
case 288:
case 928:
case 2851:
case 3911:
case 2703:
case 2118:
case 2939:
case 2049:
case 3707:
case 382:
case 1579:
case 3712:
case 1498:
case 1326:
case 3791:
case 1143:
case 1764:
case 410:
case 3420:
case 1327:
case 1638:
case 200:
case 3665:
case 2480:
case 3570:
case 3922:
case 1463:
case 3056:
case 3247:
case 2944:
case 3150:
case 2034:
case 3651:
case 1499:
case 2243:
case 1639:
case 199:
case 3079:
case 507:
case 1822:
case 874:
case 1301:
case 3246:
case 2865:
case 796:
case 1397:
case 3490:
case 2048:
case 3630:
case 1176:
case 3721:
case 4019:
case 1218:
case 2404:
case 3131:
case 275:
case 3141:
case 1793:
case 1285:
case 2530:
case 2038:
case 3640:
case 2948:
case 2321:
case 216:
case 706:
case 441:
case 741:
case 3381:
case 335:
case 3957:
case 3236:
case 873:
case 2254:
case 597:
case 1856:
case 3979:
case 2953:
case 109:
case 3813:
case 3760:
case 1649:
case 812:
case 2408:
case 2082:
case 2551:
case 1857:
case 1424:
case 1913:
case 1879:
case 3956:
case 352:
case 2816:
case 3022:
case 2312:
case 1786:
case 2670:
case 3978:
case 4071:
case 1648:
case 1154:
case 3602:
case 2840:
case 1878:
case 4014:
case 1723:
case 2409:
case 3616:
case 44:
case 3735:
case 2185:
case 74:
case 1768:
case 2039:
case 359:
case 1653:
case 3011:
case 1494:
case 3125:
case 4085:
case 2613:
case 126:
case 3074:
case 2307:
case 3617:
case 2437:
case 1284:
case 2696:
case 1983:
case 227:
case 2886:
case 1052:
case 3693:
case 3827:
case 964:
case 566:
case 3669:
case 3883:
case 3172:
case 2006:
case 3392:
case 2100:
case 2868:
case 2601:
case 448:
case 4000:
case 748:
case 3003:
case 1161:
case 132:
case 1425:
case 619:
case 637:
case 976:
case 783:
case 3749:
case 2007:
case 2935:
case 1660:
case 574:
case 3897:
case 2869:
case 2627:
case 324:
case 1996:
case 2021:
case 2261:
case 1702:
case 3748:
case 3081:
case 3552:
case 736:
case 2184:
case 754:
case 1901:
case 612:
case 3209:
case 4042:
case 520:
case 117:
case 139:
case 1717:
case 3075:
case 3753:
case 3668:
case 3801:
case 2960:
case 1635:
case 3322:
case 2757:
case 3:
case 1503:
case 2344:
case 1776:
case 3988:
case 2680:
case 1438:
case 3121:
case 3465:
case 1203:
case 2928:
case 215:
case 2890:
case 1904:
case 3731:
case 2181:
case 2341:
case 1759:
case 724:
case 930:
case 2175:
case 249:
case 3252:
case 3966:
case 1629:
case 1867:
case 1832:
case 1444:
case 3084:
case 3750:
case 838:
case 3932:
case 1500:
case 263:
case 80:
case 3042:
case 2999:
case 2264:
case 1482:
case 1628:
case 801:
case 2604:
case 770:
case 1362:
case 1337:
case 2998:
case 1009:
case 2820:
case 3880:
case 1164:
case 2929:
case 383:
case 3989:
case 2718:
case 1281:
case 125:
case 193:
case 1542:
case 3000:
case 3508:
case 3106:
case 2072:
case 257:
case 3451:
case 3385:
case 981:
case 1663:
case 1584:
case 242:
case 3846:
case 1491:
case 2673:
case 3659:
case 831:
case 1037:
case 1905:
case 3798:
case 1222:
case 1947:
case 1412:
case 601:
case 3677:
case 2843:
case 1130:
case 1036:
case 1720:
case 2452:
case 329:
case 2174:
case 4074:
case 513:
case 2192:
case 3085:
case 2858:
case 3918:
case 2610:
case 2789:
case 459:
case 2265:
case 4092:
case 2025:
case 2111:
case 759:
case 435:
case 306:
case 3537:
case 969:
case 341:
case 2251:
case 1973:
case 988:
case 3643:
case 1514:
case 1571:
case 2877:
case 2041:
case 3138:
case 1421:
case 1165:
case 2554:
case 591:
case 1211:
case 2732:
case 579:
case 3182:
case 2767:
case 452:
case 614:
case 3810:
case 3144:
case 3658:
case 747:
case 2230:
case 1910:
case 2324:
case 1585:
case 3342:
case 2766:
case 1299:
case 1263:
case 3405:
case 1023:
case 2596:
case 3447:
case 1087:
case 2378:
case 3912:
case 1086:
case 1891:
case 3569:
case 1180:
case 1812:
case 686:
case 1845:
case 2501:
case 1807:
case 3290:
case 172:
case 38:
case 3349:
case 677:
case 113:
case 3035:
case 3907:
case 1228:
case 2739:
case 3945:
case 2903:
case 1806:
case 3523:
case 1302:
case 191:
case 3587:
case 776:
case 2583:
case 2527:
case 476:
case 223:
case 1104:
case 381:
case 1093:
case 3652:
case 2128:
case 1419:
case 2476:
case 3921:
case 3188:
case 948:
case 2738:
case 2782:
case 3132:
case 1316:
case 2199:
case 764:
case 2163:
case 2357:
case 2356:
case 1603:
case 2280:
case 803:
case 894:
case 3410:
case 787:
case 1317:
case 3166:
case 3568:
case 633:
case 1535:
case 3220:
case 1488:
case 4031:
case 3119:
case 3938:
case 150:
case 3540:
case 3781:
case 2131:
case 3404:
case 3258:
case 3775:
case 1016:
case 1692:
case 1549:
case 2057:
case 1611:
case 1882:
case 3944:
case 929:
case 2150:
case 2247:
case 362:
case 2205:
case 2922:
case 4050:
case 603:
case 1467:
case 3982:
case 2651:
case 268:
case 1017:
case 2210:
case 2078:
case 1387:
case 1323:
case 1147:
case 2712:
case 3830:
case 388:
case 1231:
case 3516:
case 282:
case 1489:
case 906:
case 3049:
case 593:
case 369:
case 3118:
case 3259:
case 1368:
case 3335:
case 3517:
case 1951:
case 1839:
case 3277:
case 1534:
case 1622:
case 51:
case 1709:
case 2423:
case 2213:
case 2487:
case 3577:
case 2836:
case 2573:
case 2914:
case 1320:
case 1043:
case 555:
case 3854:
case 3427:
case 871:
case 2971:
case 400:
case 3426:
case 952:
case 1531:
case 210:
case 3576:
case 3833:
case 3178:
case 947:
case 1825:
case 2772:
case 743:
case 532:
case 1058:
case 3329:
case 443:
case 3925:
case 2270:
case 935:
case 788:
case 2510:
case 488:
case 3328:
case 1614:
case 3662:
case 2547:
case 296:
case 2505:
case 3637:
case 959:
case 2388:
case 2019:
case 2148:
case 775:
case 3497:
case 3636:
case 475:
case 1671:
case 4048:
case 3941:
case 2134:
case 3784:
case 3050:
case 3558:
case 1708:
case 2366:
case 87:
case 678:
case 2724:
case 4034:
case 762:
case 2367:
case 517:
case 539:
case 4053:
case 3240:
case 120:
case 3157:
case 3520:
case 1197:
case 2580:
case 3470:
case 2402:
case 560:
case 1090:
case 1196:
case 1376:
case 1457:
case 878:
case 387:
case 1529:
case 4060:
case 2808:
case 3286:
case 67:
case 2160:
case 1479:
case 2416:
case 2226:
case 2032:
case 509:
case 364:
case 2795:
case 2227:
case 2067:
case 970:
case 3413:
case 3223:
case 1101:
case 1478:
case 1615:
case 1736:
case 885:
case 3771:
case 2504:
case 1126:
case 730:
case 430:
case 1183:
case 2655:
case 3590:
case 1737:
case 2201:
case 3785:
case 2135:
case 2089:
case 699:
case 3293:
case 3029:
case 1872:
case 3269:
case 2297:
case 2725:
case 284:
case 924:
case 3994:
case 1563:
case 1642:
case 3861:
case 1894:
case 3972:
case 2318:
case 2385:
case 1829:
case 1524:
case 248:
case 3072:
case 1632:
case 2000:
case 2508:
case 1667:
case 342:
case 57:
case 321:
case 3103:
case 817:
case 4007:
case 592:
case 3929:
case 1411:
case 1666:
case 1492:
case 2145:
case 3718:
case 2989:
case 2107:
case 3820:
case 1354:
case 4091:
case 2112:
case 727:
case 2690:
case 751:
case 2191:
case 2371:
case 96:
case 1152:
case 1333:
case 2314:
case 1920:
case 660:
case 602:
case 2750:
case 626:
case 107:
case 1291:
case 832:
case 3264:
case 3999:
case 363:
case 2042:
case 2932:
case 2252:
case 2966:
case 349:
case 961:
case 855:
case 1990:
case 236:
case 2015:
case 3719:
case 4021:
case 2731:
case 3928:
case 1207:
case 2620:
case 2384:
case 1525:
case 3766:
case 802:
case 1618:
case 826:
case 2799:
case 3767:
case 3095:
case 3732:
case 3950:
case 4082:
case 1704:
case 3041:
case 3877:
case 655:
case 4038:
case 1239:
case 145:
case 3554:
case 3788:
case 3859:
case 2138:
case 2315:
case 1977:
case 2537:
case 3647:
case 222:
case 3533:
case 3876:
case 716:
case 328:
case 416:
case 2918:
case 578:
case 24:
case 1403:
case 1958:
case 444:
case 112:
case 1361:
case 744:
case 809:
case 1595:
case 968:
case 2676:
case 1619:
case 790:
case 2805:
case 2847:
case 490:
case 229:
case 2071:
case 989:
case 2014:
case 1943:
case 2464:
case 3673:
case 1282:
case 2677:
case 1244:
case 1849:
case 13:
case 1544:
case 1582:
case 1051:
case 108:
case 2617:
case 1400:
case 259:
case 3039:
case 3185:
case 4025:
case 3949:
case 1241:
case 2616:
case 1679:
case 2461:
case 2011:
case 3114:
case 180:
case 1783:
case 1162:
case 1137:
case 611:
case 540:
case 1030:
case 390:
case 3670:
case 1136:
case 3551:
case 247:
case 2195:
case 910:
case 3408:
case 4095:
case 2022:
case 2237:
case 252:
case 1484:
case 1701:
case 818:
case 61:
case 3953:
case 2813:
case 2979:
case 316:
case 3321:
case 728:
case 1796:
case 3802:
case 1848:
case 856:
case 2141:
case 2640:
case 1065:
case 3948:
case 3530:
case 1678:
case 4041:
case 1415:
case 131:
case 1507:
case 2753:
case 3382:
case 3779:
case 2075:
case 749:
case 35:
case 893:
case 3344:
case 2:
case 2322:
case 463:
case 1713:
case 825:
case 1860:
case 2734:
case 81:
case 3142:
case 1108:
case 1506:
case 3115:
case 1969:
case 3261:
case 1294:
case 415:
case 3021:
case 2896:
case 42:
case 72:
case 3626:
case 1993:
case 224:
case 3627:
case 2897:
case 3869:
case 586:
case 1591:
case 2687:
case 1512:
case 3338:
case 1365:
case 10:
case 2003:
case 1968:
case 2749:
case 138:
case 1485:
case 742:
case 721:
case 533:
case 2172:
case 3339:
case 2311:
case 757:
case 1835:
case 4072:
case 3868:
case 3601:
case 457:
case 811:
case 3823:
case 1471:
case 2883:
case 3697:
case 1521:
case 2454:
case 351:
case 2826:
case 1923:
case 3696:
case 3462:
case 3437:
case 1414:
case 2208:
case 3886:
case 3091:
case 3672:
case 3908:
case 643:
case 1942:
case 1984:
case 3842:
case 88:
case 1808:
case 3694:
case 3884:
case 558:
case 2479:
case 938:
case 1741:
case 3193:
case 3373:
case 2359:
case 2235:
case 1402:
case 3448:
case 914:
case 2197:
case 3169:
case 1088:
case 1580:
case 1915:
case 516:
case 2377:
case 2684:
case 1296:
case 3624:
case 167:
case 2599:
case 303:
case 2642:
case 3532:
case 2894:
case 3566:
case 544:
case 1135:
case 946:
case 3800:
case 2961:
case 2183:
case 2127:
case 1201:
case 881:
case 4083:
case 2737:
case 4027:
case 3187:
case 2762:
case 4026:
case 3186:
case 1440:
case 3347:
case 3305:
case 2478:
case 3754:
case 3588:
case 3080:
case 1809:
case 675:
case 2020:
case 2260:
case 1794:
case 77:
case 333:
case 47:
case 1018:
case 1510:
case 2825:
case 1772:
case 492:
case 3885:
case 1862:
case 3279:
case 527:
case 681:
case 1971:
case 110:
case 3814:
case 2954:
case 3519:
case 3380:
case 875:
case 1487:
case 2234:
case 3005:
case 2709:
case 1423:
case 3962:
case 3256:
case 2933:
case 2043:
case 1836:
case 3460:
case 1332:
case 1153:
case 2685:
case 2895:
case 3278:
case 220:
case 55:
case 869:
case 68:
case 3117:
case 1469:
case 908:
case 2076:
case 1019:
case 3102:
case 1654:
case 4070:
case 386:
case 1493:
case 2671:
case 3755:
case 2614:
case 1633:
case 471:
case 1547:
case 1505:
case 1205:
case 2674:
case 777:
case 3013:
case 189:
case 1651:
case 2017:
case 2467:
case 2110:
case 399:
case 3639:
case 2692:
case 563:
case 2549:
case 3822:
case 2016:
case 3301:
case 4010:
case 2393:
case 515:
case 2838:
case 3159:
case 52:
case 371:
case 2369:
case 2965:
case 1721:
case 486:
case 912:
case 1273:
case 2951:
case 3811:
case 664:
case 2622:
case 1974:
case 392:
case 945:
case 2839:
case 2534:
case 3892:
case 521:
case 37:
case 3219:
case 1911:
case 3557:
case 1745:
case 182:
case 557:
case 2489:
case 2105:
case 2147:
case 937:
case 4047:
case 3764:
case 1791:
case 1420:
case 2548:
case 1665:
case 2323:
case 1570:
case 2387:
case 2228:
case 2068:
case 1739:
case 2560:
case 2418:
case 864:
case 1129:
case 2806:
case 3288:
case 1458:
case 403:
case 2845:
case 1501:
case 2807:
case 887:
case 3803:
case 2180:
case 2086:
case 740:
case 3266:
case 3952:
case 265:
case 3026:
case 2299:
case 3267:
case 2964:
case 1378:
case 2263:
case 2023:
case 1280:
case 1356:
case 279:
case 3645:
case 1379:
case 2316:
case 3289:
case 3431:
case 1128:
case 1526:
case 195:
case 2093:
case 2069:
case 2229:
case 3765:
case 2419:
case 1476:
case 4004:
case 3370:
case 3881:
case 1477:
case 3190:
case 2302:
case 1527:
case 2821:
case 123:
case 1664:
case 1583:
case 1897:
case 711:
case 3155:
case 2591:
case 124:
case 246:
case 1623:
case 2365:
case 1687:
case 201:
case 2512:
case 2294:
case 2969:
case 3997:
case 1552:
case 1081:
case 2993:
case 105:
case 3901:
case 2860:
case 339:
case 3495:
case 2108:
case 842:
case 3716:
case 1668:
case 2545:
case 821:
case 1753:
case 1:
case 3503:
case 857:
case 3284:
case 2330:
case 1826:
case 3983:
case 2414:
case 1208:
case 3927:
case 1433:
case 3242:
case 2471:
case 355:
case 3052:
case 2521:
case 1883:
case 1669:
case 1392:
case 2835:
case 1311:
case 404:
case 1374:
case 425:
case 332:
case 1194:
case 20:
case 863:
case 3575:
case 2351:
case 2485:
case 71:
case 1749:
case 3786:
case 1978:
case 2136:
case 1602:
case 2030:
case 2538:
case 3648:
case 2364:
case 920:
case 280:
case 3133:
case 2295:
case 4062:
case 2137:
case 3787:
case 1616:
case 159:
case 3768:
case 1735:
case 649:
case 2657:
case 434:
case 1125:
case 3494:
case 1461:
case 2544:
case 418:
case 302:
case 2656:
case 208:
case 1617:
case 2678:
case 3970:
case 2415:
case 974:
case 3769:
case 2225:
case 2902:
case 2796:
case 135:
case 1870:
case 1236:
case 3511:
case 1979:
case 2916:
case 966:
case 3649:
case 3592:
case 1760:
case 309:
case 1813:
case 3424:
case 3857:
case 1195:
case 621:
case 1237:
case 3574:
case 3879:
case 152:
case 3790:
case 3274:
case 1537:
case 2831:
case 1562:
case 141:
case 651:
case 1315:
case 2959:
case 1643:
case 2355:
case 1728:
case 2239:
case 245:
case 2704:
case 1138:
case 3421:
case 3211:
case 1873:
case 1536:
case 998:
case 1799:
case 1763:
case 1144:
case 709:
case 237:
case 2618:
case 2850:
case 1464:
case 2282:
case 1846:
case 1014:
case 2943:
case 1659:
case 3947:
case 3222:
case 3905:
case 1677:
case 3412:
case 2244:
case 3130:
case 1676:
case 2780:
case 3946:
case 3036:
case 129:
case 1071:
case 3720:
case 2541:
case 1805:
case 1847:
case 3631:
case 212:
case 2361:
case 3650:
case 426:
case 318:
case 3406:
case 402:
case 726:
case 58:
case 334:
case 2238:
case 858:
case 1314:
case 3628:
case 2920:
case 3275:
case 2152:
case 2688:
case 3337:
case 3009:
case 3336:
case 500:
case 2705:
case 1690:
case 2354:
case 979:
case 3164:
case 3743:
case 1191:
case 2411:
case 1145:
case 732:
case 1107:
case 432:
case 325:
case 3439:
case 3281:
case 2492:
case 2632:
case 569:
case 304:
case 1000:
case 393:
case 3542:
case 85:
case 2667:
case 3699:
case 1385:
case 1451:
case 658:
case 1106:
case 148:
case 3584:
case 3889:
case 3758:
case 1988:
case 1465:
case 3203:
case 690:
case 1121:
case 1620:
case 2207:
case 851:
case 972:
case 3759:
case 3888:
case 575:
case 2055:
case 311:
case 1804:
case 3777:
case 2710:
case 3629:
case 562:
case 3832:
case 717:
case 739:
case 2212:
case 3866:
case 417:
case 1750:
case 2422:
case 439:
case 644:
case 3008:
case 154:
case 3482:
case 2291:
case 207:
case 3752:
case 2327:
case 3387:
case 3146:
case 1502:
case 2638:
case 3930:
case 3040:
case 2498:
case 4043:
case 3105:
case 2143:
case 2764:
case 2429:
case 1703:
case 2219:
case 1516:
case 2579:
case 169:
case 3553:
case 1939:
case 653:
case 1335:
case 3368:
case 143:
case 3951:
case 398:
case 1277:
case 583:
case 2892:
case 774:
case 3839:
case 2158:
case 2644:
case 2556:
case 474:
case 3622:
case 2578:
case 3488:
case 3965:
case 1540:
case 1938:
case 175:
case 4076:
case 2218:
case 1404:
case 2159:
case 4077:
case 3838:
case 1865:
case 3173:
case 810:
case 1258:
case 2397:
case 536:
case 271:
case 3016:
case 720:
case 956:
case 3692:
case 420:
case 3844:
case 554:
case 1053:
case 3882:
case 3611:
case 2013:
case 2463:
case 3674:
case 162:
case 1360:
case 3467:
case 1243:
case 3302:
case 925:
case 285:
case 2190:
case 2370:
case 2881:
case 91:
case 1473:
case 3821:
case 1652:
case 181:
case 3093:
case 541:
case 1586:
case 610:
case 2765:
case 506:
case 2097:
case 522:
case 1353:
case 884:
case 1167:
case 2450:
case 797:
case 3298:
case 1334:
case 2313:
case 3317:
case 3535:
case 1568:
case 1060:
case 379:
case 1991:
case 2083:
case 2232:
case 2267:
case 3340:
case 130:
case 1912:
case 3087:
case 2621:
case 3086:
case 2730:
case 1569:
case 1864:
case 365:
case 1593:
case 3681:
case 2266:
case 54:
case 3845:
case 372:
case 1349:
case 278:
case 313:
case 3418:
case 911:
case 1189:
case 3068:
case 1945:
case 3560:
case 3228:
case 1035:
case 1711:
case 3806:
case 39:
case 853:
case 2588:
case 939:
case 917:
case 765:
case 3478:
case 3615:
case 3736:
case 240:
case 4086:
case 4087:
case 3127:
case 4023:
case 3183:
case 1098:
case 2123:
case 2168:
case 1785:
case 49:
case 1293:
case 79:
case 3872:
case 1269:
case 1029:
case 4068:
case 3961:
case 689:
case 413:
case 3684:
case 3563:
case 2532:
case 1608:
case 1861:
case 2567:
case 472:
case 668:
case 2624:
case 1972:
case 3235:
case 1520:
case 3359:
case 2373:
case 2193:
case 1855:
case 3377:
case 2169:
case 3197:
case 2448:
case 3598:
case 176:
case 3196:
case 491:
case 932:
case 2815:
case 3955:
case 479:
case 187:
case 3529:
case 3457:
case 2694:
case 1286:
case 3479:
case 2884:
case 2589:
case 682:
case 547:
case 2908:
case 3600:
case 164:
case 1924:
case 955:
case 1063:
case 3456:
case 2073:
case 3059:
case 1543:
case 505:
case 3614:
case 2755:
case 661:
case 3077:
case 1715:
case 1497:
case 3390:
case 524:
case 3671:
case 926:
case 750:
case 1941:
case 1401:
case 5:
case 3113:
case 1558:
case 882:
case 1742:
case 2117:
case 1995:
case 3708:
case 277:
case 2518:
case 2010:
case 2116:
case 2962:
case 3709:
case 2005:
case 3234:
case 2871:
case 1217:
case 1483:
case 3043:
case 1427:
case 1854:
case 623:
case 1426:
case 4040:
case 2641:
case 1216:
case 1576:
case 2814:
case 3954:
case 2046:
case 1398:
case 1178:
case 2695:
case 3825:
case 2885:
case 798:
case 1329:
case 3550:
case 868:
case 1202:
case 3248:
case 2761:
case 66:
case 2435:
case 2445:
case 971:
case 1192:
case 852:
case 1858:
case 1610:
case 1789:
case 1372:
case 6:
case 1025:
case 3238:
case 3958:
case 2818:
case 708:
case 4051:
case 3361:
case 408:
case 2406:
case 3595:
case 2151:
case 2309:
case 2946:
case 561:
case 1843:
case 3619:
case 3541:
case 605:
case 2720:
case 624:
case 3033:
case 2491:
case 1673:
case 999:
case 780:
case 2905:
case 2222:
case 2062:
case 3525:
case 1766:
case 2910:
case 3850:
case 319:
case 337:
case 1732:
case 1095:
case 1122:
case 1041:
case 1931:
case 992:
case 3239:
case 2571:
case 4065:
case 2292:
case 3481:
case 3355:
case 1877:
case 1646:
case 2211:
case 2421:
case 1788:
case 1554:
case 1647:
case 3831:
case 2790:
case 2274:
case 2819:
case 3959:
case 1876:
case 1533:
case 2973:
case 128:
case 3422:
case 1963:
case 2866:
case 3212:
case 2482:
case 307:
case 2008:
case 163:
case 1175:
case 149:
case 1395:
case 659:
case 3899:
case 2867:
case 2629:
case 446:
case 3206:
case 401:
case 2777:
case 211:
case 978:
case 2203:
case 1680:
case 115:
case 2904:
case 1928:
case 1072:
case 647:
case 3829:
case 8:
case 2699:
case 2542:
case 652:
case 121:
case 3061:
case 1103:
case 738:
case 21:
case 3666:
case 225:
case 985:
case 40:
case 805:
case 1820:
case 3354:
case 1998:
case 2009:
case 3747:
case 2743:
case 1555:
case 635:
case 3898:
case 3920:
case 2628:
case 3333:
case 3746:
case 824:
case 3688:
case 2215:
case 2161:
case 232:
case 2425:
case 1935:
case 1007:
case 2660:
case 3968:
case 3351:
case 3485:
case 338:
case 4061:
case 2575:
case 1100:
case 1006:
case 1255:
case 1868:
case 3835:
case 2052:
case 2581:
case 3471:
case 1436:
case 2740:
case 3986:
case 151:
case 1437:
case 3330:
case 606:
case 2284:
case 1696:
case 3414:
case 3224:
case 1091:
case 1960:
case 1779:
case 15:
case 1757:
case 1756:
case 407:
case 3108:
case 940:
case 217:
case 2495:
case 239:
case 2997:
case 1021:
case 3770:
case 2441:
case 1626:
case 629:
case 1627:
case 3591:
case 2155:
case 1869:
case 3272:
case 1683:
case 2996:
case 1338:
case 346:
case 1082:
case 158:
case 2424:
case 2857:
case 2214:
case 84:
case 3442:
case 2574:
case 1934:
case 3701:
case 3853:
case 437:
case 419:
case 2511:
case 719:
case 2592:
case 3834:
case 2856:
case 3916:
case 829:
case 933:
case 3796:
case 1802:
case 2285:
case 3225:
case 260:
case 445:
case 1948:
case 3065:
case 3415:
case 2970:
case 3678:
case 986:
case 2522:
case 3656:
case 202:
case 584:
case 3849:
case 773:
case 412:
case 3051:
case 654:
case 1307:
case 3400:
case 1949:
case 1185:
case 2768:
case 1306:
case 2653:
case 3241:
case 2494:
case 2878:
case 3727:
case 3295:
case 2133:
case 1114:
case 1840:
case 2787:
case 3162:
case 4033:
case 2648:
case 1565:
case 2154:
case 636:
case 190:
case 3030:
case 1312:
case 1391:
case 822:
case 1171:
case 3726:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1742781601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,];
var gg_b = "1742781601/";

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
