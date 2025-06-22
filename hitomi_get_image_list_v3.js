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
case 342:
case 3586:
case 1966:
case 2830:
case 1967:
case 185:
case 2011:
case 1624:
case 3205:
case 1224:
case 999:
case 2508:
case 1640:
case 2358:
case 2890:
case 2366:
case 732:
case 3193:
case 1873:
case 2982:
case 3227:
case 3626:
case 3226:
case 238:
case 2060:
case 2804:
case 1251:
case 2772:
case 1651:
case 1813:
case 1939:
case 2339:
case 715:
case 2071:
case 171:
case 1999:
case 1888:
case 1407:
case 2182:
case 3361:
case 1406:
case 3775:
case 664:
case 1822:
case 2621:
case 3738:
case 4032:
case 1166:
case 1158:
case 3933:
case 1014:
case 3016:
case 120:
case 3164:
case 2003:
case 3430:
case 118:
case 3310:
case 856:
case 4050:
case 1199:
case 1074:
case 2254:
case 500:
case 1139:
case 3490:
case 2602:
case 1801:
case 136:
case 651:
case 1080:
case 594:
case 2015:
case 5:
case 415:
case 3023:
case 2424:
case 3201:
case 2776:
case 3601:
case 296:
case 2440:
case 1255:
case 2451:
case 2717:
case 3181:
case 2362:
case 3703:
case 2098:
case 927:
case 3622:
case 2564:
case 1219:
case 2038:
case 865:
case 2748:
case 825:
case 1343:
case 2075:
case 2225:
case 2625:
case 3528:
case 1421:
case 2607:
case 3213:
case 3613:
case 2207:
case 559:
case 2606:
case 3851:
case 3771:
case 2206:
case 3072:
case 553:
case 495:
case 608:
case 1709:
case 4069:
case 1162:
case 3108:
case 880:
case 1570:
case 2593:
case 325:
case 2186:
case 1805:
case 1561:
case 3468:
case 1826:
case 4036:
case 4037:
case 2947:
case 4064:
case 945:
case 2946:
case 3531:
case 1475:
case 1752:
case 3141:
case 2671:
case 1318:
case 2713:
case 3320:
case 3132:
case 3344:
case 585:
case 1383:
case 1347:
case 3591:
case 847:
case 1395:
case 571:
case 841:
case 2935:
case 1040:
case 287:
case 275:
case 833:
case 1730:
case 2211:
case 1812:
case 2773:
case 2853:
case 1790:
case 839:
case 1335:
case 2596:
case 2118:
case 3932:
case 172:
case 2054:
case 2597:
case 560:
case 1274:
case 3941:
case 1674:
case 1823:
case 2147:
case 3677:
case 2146:
case 2701:
case 3880:
case 3617:
case 3389:
case 3217:
case 2603:
case 476:
case 3216:
case 2195:
case 743:
case 1614:
case 679:
case 731:
case 3248:
case 333:
case 604:
case 2021:
case 2569:
case 341:
case 749:
case 1471:
case 3578:
case 690:
case 2675:
case 1816:
case 805:
case 234:
case 1019:
case 3721:
case 3814:
case 2638:
case 3409:
case 2298:
case 536:
case 1:
case 3136:
case 1544:
case 1520:
case 1963:
case 1391:
case 1342:
case 3547:
case 3583:
case 3223:
case 1194:
case 2991:
case 2942:
case 3874:
case 3196:
case 1680:
case 2215:
case 1876:
case 1757:
case 2550:
case 92:
case 96:
case 114:
case 1229:
case 3073:
case 646:
case 3612:
case 305:
case 3212:
case 2726:
case 776:
case 610:
case 159:
case 2727:
case 1900:
case 2532:
case 2414:
case 3996:
case 628:
case 437:
case 2334:
case 3272:
case 962:
case 2142:
case 1994:
case 922:
case 2191:
case 2006:
case 2131:
case 3936:
case 652:
case 1163:
case 2025:
case 3338:
case 3129:
case 217:
case 3761:
case 1511:
case 2084:
case 3418:
case 3375:
case 1444:
case 1008:
case 1420:
case 3062:
case 3770:
case 3850:
case 2153:
case 3483:
case 3446:
case 1923:
case 3509:
case 3710:
case 3841:
case 3495:
case 3359:
case 1571:
case 4055:
case 4:
case 515:
case 3832:
case 1728:
case 2953:
case 948:
case 2895:
case 642:
case 1245:
case 3200:
case 3600:
case 3929:
case 1503:
case 2312:
case 1353:
case 772:
case 2766:
case 2878:
case 291:
case 414:
case 1489:
case 3234:
case 926:
case 966:
case 1236:
case 278:
case 64:
case 149:
case 1637:
case 2846:
case 1296:
case 2883:
case 1697:
case 2450:
case 77:
case 2065:
case 3694:
case 3039:
case 1834:
case 1515:
case 4024:
case 2909:
case 3836:
case 7:
case 1177:
case 851:
case 2244:
case 3174:
case 1894:
case 2220:
case 665:
case 3066:
case 1117:
case 3869:
case 1800:
case 3491:
case 3845:
case 857:
case 3442:
case 1148:
case 3311:
case 2445:
case 2891:
case 1292:
case 1241:
case 47:
case 351:
case 1977:
case 176:
case 400:
case 759:
case 808:
case 2109:
case 2376:
case 1863:
case 2377:
case 714:
case 1632:
case 1085:
case 1232:
case 2436:
case 1948:
case 2437:
case 269:
case 229:
case 3553:
case 2289:
case 3303:
case 2317:
case 357:
case 680:
case 2496:
case 1787:
case 1033:
case 263:
case 1743:
case 1250:
case 2348:
case 3885:
case 3482:
case 132:
case 1901:
case 2551:
case 3979:
case 292:
case 2828:
case 777:
case 2464:
case 3833:
case 13:
case 379:
case 115:
case 2322:
case 2130:
case 3919:
case 771:
case 1208:
case 3262:
case 3662:
case 2540:
case 436:
case 3955:
case 641:
case 2684:
case 3893:
case 2190:
case 2249:
case 1899:
case 1461:
case 3568:
case 1718:
case 3307:
case 1554:
case 720:
case 3325:
case 1988:
case 1783:
case 1037:
case 1746:
case 2388:
case 1470:
case 906:
case 1747:
case 2493:
case 1913:
case 1839:
case 3720:
case 3744:
case 250:
case 1330:
case 873:
case 3155:
case 2882:
case 1281:
case 1069:
case 3000:
case 1045:
case 3119:
case 1867:
case 549:
case 879:
case 1778:
case 1866:
case 983:
case 1905:
case 3924:
case 346:
case 3940:
case 2700:
case 1926:
case 498:
case 736:
case 1264:
case 1664:
case 2327:
case 890:
case 35:
case 3258:
case 3658:
case 471:
case 2305:
case 605:
case 485:
case 477:
case 2020:
case 3299:
case 2044:
case 328:
case 368:
case 352:
case 3443:
case 2579:
case 2168:
case 3487:
case 3951:
case 3639:
case 1484:
case 203:
case 4074:
case 1050:
case 1233:
case 418:
case 390:
case 810:
case 1862:
case 1127:
case 209:
case 1105:
case 2670:
case 3140:
case 2886:
case 2270:
case 2843:
case 3151:
case 2481:
case 1032:
case 1285:
case 2957:
case 2956:
case 944:
case 828:
case 2763:
case 868:
case 3302:
case 1368:
case 1525:
case 3354:
case 236:
case 3539:
case 2080:
case 362:
case 2279:
case 3165:
case 3427:
case 3854:
case 3774:
case 358:
case 1856:
case 1868:
case 534:
case 3405:
case 1424:
case 1857:
case 196:
case 3566:
case 3558:
case 1451:
case 2255:
case 3567:
case 1362:
case 1717:
case 1098:
case 1986:
case 36:
case 3821:
case 1038:
case 2219:
case 905:
case 492:
case 2386:
case 1075:
case 1625:
case 3604:
case 1225:
case 709:
case 1207:
case 1607:
case 41:
case 450:
case 1206:
case 1606:
case 3652:
case 3949:
case 140:
case 822:
case 3965:
case 862:
case 2709:
case 3381:
case 3630:
case 3230:
case 412:
case 1186:
case 1143:
case 307:
case 1187:
case 2402:
case 2029:
case 2826:
case 2454:
case 2827:
case 1533:
case 3184:
case 581:
case 792:
case 1011:
case 285:
case 2967:
case 3729:
case 4020:
case 1830:
case 1508:
case 2224:
case 3562:
case 3401:
case 2624:
case 1367:
case 1712:
case 933:
case 2753:
case 1358:
case 3364:
case 138:
case 1804:
case 3422:
case 1399:
case 1852:
case 1772:
case 79:
case 2939:
case 3110:
case 1339:
case 1071:
case 271:
case 2888:
case 575:
case 1182:
case 2407:
case 486:
case 2425:
case 2822:
case 689:
case 18:
case 3970:
case 712:
case 2166:
case 2167:
case 3488:
case 1581:
case 2014:
case 220:
case 260:
case 474:
case 1928:
case 182:
case 1654:
case 409:
case 1723:
case 2139:
case 3910:
case 2549:
case 3257:
case 3473:
case 606:
case 3657:
case 1202:
case 3256:
case 2801:
case 3780:
case 2816:
case 1675:
case 2471:
case 2100:
case 3803:
case 925:
case 965:
case 294:
case 2848:
case 1698:
case 827:
case 1298:
case 655:
case 2055:
case 370:
case 2:
case 2963:
case 2342:
case 1659:
case 821:
case 417:
case 2331:
case 1942:
case 2194:
case 2411:
case 1215:
case 2756:
case 2680:
case 2877:
case 1300:
case 870:
case 3345:
case 253:
case 367:
case 2629:
case 327:
case 80:
case 3253:
case 3740:
case 516:
case 3476:
case 4065:
case 1705:
case 2589:
case 980:
case 2900:
case 3337:
case 1532:
case 3336:
case 2403:
case 1334:
case 2994:
case 3751:
case 1191:
case 3871:
case 763:
case 3416:
case 361:
case 3052:
case 769:
case 1131:
case 729:
case 1007:
case 1541:
case 3860:
case 3004:
case 1983:
case 2438:
case 1946:
case 1271:
case 2872:
case 2752:
case 1713:
case 1918:
case 181:
case 3209:
case 1260:
case 2346:
case 1660:
case 2395:
case 899:
case 1978:
case 711:
case 2040:
case 2730:
case 2024:
case 319:
case 175:
case 1611:
case 1480:
case 1211:
case 2378:
case 2790:
case 1853:
case 313:
case 1773:
case 3423:
case 354:
case 2335:
case 3056:
case 3068:
case 1002:
case 1429:
case 666:
case 3057:
case 429:
case 3392:
case 3341:
case 4070:
case 272:
case 956:
case 463:
case 2274:
case 3332:
case 1537:
case 1147:
case 4061:
case 3412:
case 1183:
case 3534:
case 3815:
case 3755:
case 1195:
case 3472:
case 3875:
case 200:
case 27:
case 2614:
case 393:
case 648:
case 1178:
case 791:
case 1545:
case 399:
case 1021:
case 3719:
case 778:
case 582:
case 475:
case 487:
case 1909:
case 344:
case 3523:
case 2177:
case 2309:
case 3646:
case 3283:
case 3683:
case 3971:
case 1644:
case 1244:
case 1620:
case 734:
case 3911:
case 2064:
case 3103:
case 3781:
case 2117:
case 3695:
case 2598:
case 3295:
case 3082:
case 3635:
case 3235:
case 3678:
case 2241:
case 2292:
case 1842:
case 1445:
case 2692:
case 1891:
case 3400:
case 3028:
case 928:
case 509:
case 2976:
case 3160:
case 574:
case 503:
case 1377:
case 952:
case 2232:
case 2085:
case 2632:
case 1831:
case 2093:
case 1070:
case 1436:
case 62:
case 169:
case 284:
case 1316:
case 1317:
case 4002:
case 3708:
case 95:
case 3903:
case 1529:
case 2916:
case 910:
case 3111:
case 2033:
case 586:
case 1348:
case 123:
case 2743:
case 163:
case 3087:
case 3043:
case 2511:
case 592:
case 3975:
case 2008:
case 2112:
case 3938:
case 3785:
case 2923:
case 3691:
case 3242:
case 645:
case 59:
case 3915:
case 306:
case 2571:
case 775:
case 2728:
case 3631:
case 883:
case 237:
case 979:
case 1492:
case 3175:
case 2645:
case 1441:
case 2669:
case 2269:
case 1514:
case 1432:
case 512:
case 1312:
case 4007:
case 904:
case 889:
case 1878:
case 4006:
case 3198:
case 3516:
case 2489:
case 3576:
case 2237:
case 249:
case 1883:
case 3115:
case 2696:
case 1450:
case 2297:
case 2697:
case 2123:
case 1065:
case 3820:
case 231:
case 1049:
case 2972:
case 3844:
case 3121:
case 2905:
case 667:
case 3769:
case 1519:
case 796:
case 438:
case 855:
case 3745:
case 3095:
case 957:
case 2664:
case 1327:
case 3522:
case 3340:
case 4071:
case 1020:
case 3865:
case 3501:
case 4011:
case 3351:
case 3737:
case 3797:
case 3796:
case 1168:
case 3102:
case 661:
case 3154:
case 1794:
case 621:
case 2484:
case 3018:
case 2050:
case 2633:
case 2233:
case 3573:
case 1661:
case 2862:
case 2465:
case 1089:
case 3884:
case 670:
case 330:
case 2105:
case 109:
case 60:
case 2693:
case 1886:
case 1670:
case 3954:
case 2791:
case 2285:
case 2685:
case 1481:
case 523:
case 186:
case 3513:
case 2507:
case 4003:
case 2357:
case 2506:
case 2525:
case 2731:
case 602:
case 2041:
case 2113:
case 232:
case 3741:
case 3379:
case 1152:
case 3125:
case 2901:
case 366:
case 3458:
case 3466:
case 1301:
case 3042:
case 1464:
case 3732:
case 1828:
case 23:
case 3527:
case 348:
case 693:
case 3505:
case 4015:
case 3870:
case 1190:
case 4059:
case 3286:
case 3643:
case 2922:
case 3687:
case 699:
case 19:
case 3287:
case 1265:
case 2718:
case 2461:
case 2554:
case 2097:
case 2988:
case 597:
case 2304:
case 2096:
case 866:
case 2746:
case 3925:
case 2783:
case 2747:
case 2036:
case 2973:
case 150:
case 2122:
case 2330:
case 924:
case 2795:
case 2410:
case 1882:
case 2069:
case 654:
case 591:
case 2045:
case 848:
case 1930:
case 613:
case 440:
case 2866:
case 782:
case 2858:
case 2778:
case 1815:
case 3183:
case 2276:
case 2880:
case 3701:
case 3146:
case 2676:
case 2277:
case 2453:
case 3147:
case 971:
case 1144:
case 3597:
case 3596:
case 881:
case 1057:
case 3429:
case 1056:
case 247:
case 3135:
case 545:
case 3569:
case 3021:
case 69:
case 199:
case 1350:
case 887:
case 875:
case 233:
case 2248:
case 193:
case 985:
case 977:
case 2616:
case 1472:
case 3195:
case 2617:
case 3603:
case 2217:
case 2542:
case 4082:
case 3260:
case 381:
case 2132:
case 2320:
case 789:
case 1563:
case 1920:
case 3713:
case 2141:
case 3271:
case 612:
case 2531:
case 3983:
case 3947:
case 918:
case 154:
case 1423:
case 3853:
case 2150:
case 3480:
case 119:
case 375:
case 387:
case 2027:
case 444:
case 1189:
case 2026:
case 2969:
case 3727:
case 2945:
case 501:
case 1030:
case 1476:
case 1477:
case 1653:
case 3550:
case 1345:
case 1004:
case 3809:
case 1448:
case 3541:
case 2936:
case 3006:
case 3394:
case 1416:
case 3191:
case 1751:
case 3142:
case 3334:
case 2997:
case 3532:
case 2088:
case 507:
case 2996:
case 406:
case 522:
case 170:
case 562:
case 744:
case 3298:
case 2022:
case 2409:
case 3238:
case 674:
case 334:
case 603:
case 1803:
case 2169:
case 2578:
case 3275:
case 2197:
case 56:
case 2702:
case 2196:
case 3363:
case 2518:
case 2874:
case 3931:
case 2583:
case 4087:
case 489:
case 2547:
case 2001:
case 2136:
case 686:
case 2017:
case 3003:
case 2164:
case 1488:
case 2819:
case 2370:
case 2798:
case 2048:
case 2404:
case 617:
case 3221:
case 1333:
case 3621:
case 2775:
case 2855:
case 2361:
case 3182:
case 3602:
case 2715:
case 430:
case 593:
case 1657:
case 2490:
case 1257:
case 3723:
case 2985:
case 3654:
case 2879:
case 382:
case 3928:
case 1385:
case 2077:
case 599:
case 145:
case 2076:
case 766:
case 2226:
case 1364:
case 2627:
case 3982:
case 2227:
case 3358:
case 3890:
case 3367:
case 4018:
case 3712:
case 1562:
case 697:
case 3508:
case 3830:
case 2133:
case 97:
case 1161:
case 2587:
case 4083:
case 242:
case 2543:
case 4047:
case 3479:
case 4095:
case 519:
case 748:
case 256:
case 3128:
case 3339:
case 2185:
case 1807:
case 1110:
case 1825:
case 4035:
case 3804:
case 678:
case 3585:
case 567:
case 2688:
case 527:
case 1965:
case 1949:
case 2771:
case 3206:
case 1252:
case 2365:
case 3207:
case 2528:
case 755:
case 2981:
case 2468:
case 2711:
case 3187:
case 2457:
case 1290:
case 2840:
case 1053:
case 1230:
case 265:
case 2012:
case 1630:
case 521:
case 3593:
case 561:
case 2108:
case 3440:
case 1599:
case 396:
case 3857:
case 3868:
case 2601:
case 3856:
case 1405:
case 3776:
case 3059:
case 1854:
case 158:
case 1774:
case 1427:
case 840:
case 1165:
case 2023:
case 570:
case 50:
case 1539:
case 3015:
case 3075:
case 280:
case 2384:
case 4091:
case 3748:
case 663:
case 3038:
case 2582:
case 3987:
case 1821:
case 2622:
case 629:
case 4031:
case 12:
case 2222:
case 16:
case 914:
case 2181:
case 1308:
case 3362:
case 3717:
case 1567:
case 953:
case 3716:
case 1558:
case 1566:
case 681:
case 2744:
case 2034:
case 1925:
case 3904:
case 2325:
case 3433:
case 2556:
case 3665:
case 2557:
case 312:
case 2306:
case 3649:
case 3373:
case 2000:
case 2428:
case 2155:
case 687:
case 31:
case 3990:
case 350:
case 401:
case 1732:
case 812:
case 3828:
case 3464:
case 2979:
case 392:
case 1042:
case 589:
case 1467:
case 943:
case 1466:
case 1458:
case 3551:
case 126:
case 583:
case 2063:
case 1125:
case 1792:
case 1106:
case 46:
case 1107:
case 2885:
case 1031:
case 39:
case 850:
case 204:
case 458:
case 1643:
case 273:
case 81:
case 1686:
case 1243:
case 1750:
case 3684:
case 3540:
case 1499:
case 1355:
case 3524:
case 2262:
case 1505:
case 506:
case 422:
case 1526:
case 148:
case 937:
case 2833:
case 1527:
case 2919:
case 3130:
case 2140:
case 3670:
case 701:
case 309:
case 2124:
case 130:
case 155:
case 3089:
case 2530:
case 2808:
case 3261:
case 290:
case 634:
case 303:
case 2354:
case 2504:
case 1228:
case 1628:
case 2302:
case 1513:
case 3968:
case 1902:
case 386:
case 3957:
case 1588:
case 3610:
case 544:
case 2267:
case 3305:
case 2667:
case 722:
case 2258:
case 762:
case 3555:
case 1522:
case 3327:
case 2881:
case 4009:
case 1035:
case 809:
case 246:
case 2924:
case 2239:
case 1018:
case 72:
case 886:
case 1102:
case 252:
case 268:
case 1047:
case 976:
case 1737:
case 1046:
case 1849:
case 2699:
case 1351:
case 3044:
case 1462:
case 1501:
case 1865:
case 1516:
case 421:
case 461:
case 3758:
case 2929:
case 3767:
case 3432:
case 4004:
case 1175:
case 3492:
case 3895:
case 1138:
case 1329:
case 3953:
case 1844:
case 3049:
case 1820:
case 3847:
case 3450:
case 3883:
case 3574:
case 638:
case 467:
case 3818:
case 2634:
case 811:
case 799:
case 2234:
case 1576:
case 427:
case 4090:
case 1159:
case 3799:
case 1577:
case 391:
case 2483:
case 995:
case 2850:
case 2398:
case 183:
case 3153:
case 526:
case 1889:
case 2418:
case 3084:
case 1998:
case 897:
case 1086:
case 224:
case 2338:
case 317:
case 68:
case 40:
case 3323:
case 891:
case 2832:
case 311:
case 1959:
case 2663:
case 2315:
case 548:
case 2478:
case 470:
case 2495:
case 713:
case 1785:
case 2509:
case 2710:
case 1374:
case 3377:
case 1160:
case 3109:
case 1028:
case 2974:
case 3842:
case 1171:
case 3891:
case 3445:
case 1111:
case 1494:
case 3529:
case 257:
case 1512:
case 1434:
case 3289:
case 3317:
case 4068:
case 1708:
case 3316:
case 4057:
case 3437:
case 329:
case 3070:
case 3436:
case 761:
case 3220:
case 3244:
case 2099:
case 3644:
case 2174:
case 1246:
case 2360:
case 1646:
case 1247:
case 208:
case 2897:
case 1647:
case 616:
case 770:
case 1960:
case 3909:
case 1523:
case 2837:
case 2749:
case 2371:
case 3580:
case 2039:
case 2765:
case 1218:
case 1618:
case 1463:
case 1678:
case 829:
case 1278:
case 2431:
case 1082:
case 1635:
case 1295:
case 2442:
case 1695:
case 2845:
case 1103:
case 2066:
case 863:
case 1911:
case 751:
case 1212:
case 2811:
case 2653:
case 2740:
case 2253:
case 1073:
case 314:
case 227:
case 2345:
case 8:
case 2369:
case 2397:
case 2448:
case 996:
case 1013:
case 3934:
case 221:
case 261:
case 2871:
case 2751:
case 1272:
case 2417:
case 1997:
case 757:
case 1088:
case 3055:
case 3:
case 853:
case 1595:
case 3848:
case 394:
case 1022:
case 1409:
case 1721:
case 1535:
case 3100:
case 3471:
case 1578:
case 859:
case 1197:
case 3757:
case 3411:
case 4062:
case 3756:
case 3876:
case 202:
case 1874:
case 940:
case 1623:
case 1546:
case 424:
case 1583:
case 1547:
case 3520:
case 1137:
case 916:
case 1136:
case 1880:
case 457:
case 2534:
case 1276:
case 2412:
case 1677:
case 1453:
case 3823:
case 3674:
case 1941:
case 2779:
case 2859:
case 632:
case 938:
case 147:
case 2068:
case 141:
case 299:
case 2500:
case 2719:
case 1248:
case 133:
case 1648:
case 2898:
case 1950:
case 3214:
case 615:
case 2838:
case 451:
case 2875:
case 1216:
case 1542:
case 3498:
case 3347:
case 2209:
case 542:
case 1320:
case 764:
case 1132:
case 872:
case 3318:
case 2563:
case 982:
case 4058:
case 4066:
case 3872:
case 3438:
case 1725:
case 3704:
case 688:
case 800:
case 3335:
case 3790:
case 1150:
case 87:
case 213:
case 54:
case 695:
case 1005:
case 4039:
case 3024:
case 3040:
case 3459:
case 1288:
case 4000:
case 1760:
case 3709:
case 1072:
case 2252:
case 1851:
case 1771:
case 1365:
case 1613:
case 1213:
case 2204:
case 505:
case 2604:
case 1981:
case 3826:
case 4034:
case 1711:
case 3561:
case 1456:
case 1468:
case 3029:
case 3402:
case 2290:
case 1673:
case 2053:
case 4094:
case 2630:
case 1012:
case 2230:
case 3570:
case 2381:
case 3162:
case 473:
case 2854:
case 2165:
case 222:
case 2149:
case 3279:
case 3080:
case 710:
case 180:
case 3962:
case 1384:
case 3386:
case 26:
case 684:
case 2714:
case 1622:
case 2821:
case 1703:
case 1181:
case 2566:
case 752:
case 3655:
case 3255:
case 1164:
case 1819:
case 3014:
case 877:
case 3166:
case 1370:
case 3822:
case 1738:
case 975:
case 1775:
case 1452:
case 2413:
case 3801:
case 2780:
case 2668:
case 3549:
case 2657:
case 1985:
case 3328:
case 2910:
case 3074:
case 541:
case 1879:
case 2385:
case 871:
case 1077:
case 318:
case 1076:
case 245:
case 898:
case 1226:
case 452:
case 1626:
case 1227:
case 2364:
case 1627:
case 1193:
case 3873:
case 3640:
case 2401:
case 2562:
case 3584:
case 637:
case 3967:
case 2729:
case 3958:
case 3966:
case 820:
case 860:
case 2161:
case 428:
case 468:
case 643:
case 45:
case 156:
case 371:
case 631:
case 3939:
case 2807:
case 1185:
case 704:
case 3813:
case 773:
case 3251:
case 2422:
case 2825:
case 3693:
case 551:
case 694:
case 2921:
case 1124:
case 230:
case 3465:
case 1808:
case 2573:
case 3050:
case 1354:
case 3092:
case 3041:
case 3731:
case 2628:
case 3525:
case 725:
case 1504:
case 1552:
case 3356:
case 2513:
case 3507:
case 2902:
case 3285:
case 557:
case 4048:
case 1151:
case 1667:
case 1267:
case 1658:
case 2340:
case 1266:
case 963:
case 3664:
case 15:
case 659:
case 2522:
case 2095:
case 3926:
case 2745:
case 2769:
case 1881:
case 2282:
case 146:
case 1940:
case 2078:
case 2121:
case 929:
case 1924:
case 614:
case 3905:
case 2018:
case 1239:
case 3484:
case 2154:
case 2796:
case 1486:
case 1443:
case 152:
case 2047:
case 168:
case 780:
case 128:
case 2046:
case 2849:
case 2501:
case 2865:
case 2462:
case 3839:
case 2907:
case 1034:
case 3913:
case 3783:
case 2925:
case 1325:
case 388:
case 3097:
case 3554:
case 465:
case 3461:
case 1556:
case 1306:
case 3899:
case 3352:
case 1557:
case 3778:
case 4072:
case 3858:
case 3390:
case 3866:
case 395:
case 1119:
case 3867:
case 3045:
case 3069:
case 3735:
case 1000:
case 1428:
case 1864:
case 3410:
case 3795:
case 917:
case 3122:
case 3973:
case 2042:
case 2091:
case 1979:
case 524:
case 2467:
case 564:
case 2466:
case 266:
case 226:
case 3901:
case 332:
case 2106:
case 2379:
case 3113:
case 2107:
case 2687:
case 104:
case 2686:
case 2286:
case 3173:
case 2439:
case 2355:
case 2861:
case 3608:
case 1789:
case 2505:
case 1262:
case 3208:
case 248:
case 756:
case 2526:
case 1919:
case 2527:
case 67:
case 4023:
case 315:
case 179:
case 590:
case 2374:
case 3085:
case 2572:
case 3863:
case 2160:
case 3976:
case 376:
case 439:
case 3241:
case 1974:
case 2171:
case 3641:
case 3650:
case 3743:
case 3787:
case 1914:
case 2111:
case 3916:
case 2494:
case 1784:
case 2708:
case 447:
case 1303:
case 3093:
case 3948:
case 1099:
case 2646:
case 3176:
case 876:
case 1360:
case 2246:
case 2647:
case 108:
case 2247:
case 1836:
case 986:
case 2523:
case 1837:
case 2960:
case 1371:
case 1749:
case 3515:
case 1765:
case 1039:
case 909:
case 1311:
case 2278:
case 3575:
case 2678:
case 884:
case 3538:
case 2082:
case 2635:
case 1431:
case 2235:
case 1442:
case 3598:
case 2695:
case 2103:
case 3064:
case 3117:
case 3800:
case 1058:
case 552:
case 974:
case 2911:
case 2198:
case 3353:
case 3503:
case 99:
case 2764:
case 747:
case 1600:
case 3782:
case 3269:
case 2548:
case 2329:
case 337:
case 685:
case 671:
case 1294:
case 331:
case 3972:
case 405:
case 739:
case 3297:
case 3697:
case 3296:
case 1180:
case 3696:
case 3237:
case 349:
case 741:
case 3236:
case 3636:
case 1234:
case 2576:
case 4073:
case 2159:
case 733:
case 1446:
case 2938:
case 3112:
case 1483:
case 2793:
case 283:
case 1447:
case 1062:
case 2975:
case 660:
case 3444:
case 620:
case 3511:
case 2889:
case 2086:
case 164:
case 1338:
case 1129:
case 124:
case 2631:
case 3728:
case 1435:
case 2959:
case 579:
case 2380:
case 1315:
case 206:
case 3571:
case 1478:
case 573:
case 618:
case 1980:
case 2915:
case 843:
case 1495:
case 2642:
case 1359:
case 1892:
case 912:
case 831:
case 1509:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750593601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,];
var gg_b = "1750593601/";

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
